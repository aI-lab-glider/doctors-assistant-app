import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Builder from "crane-query-builder";
import reducer, { DIAGNOSIS_ACTIONS } from "./DiagnosisReducer";
import { database, TABLES } from "../database/database";

export const DiagnosisContext = createContext({
  modules: {},
  patientId: 0,
});

function DiagnosisContextProvider({ children, patientId }) {
  const [state, dispatch] = useReducer(reducer, { patientId });

  useEffect(() => {
    const fetchModulesFromDb = async () => {
      const fetchedModules = await Builder().table(TABLES.modules).get();
      dispatch({
        type: DIAGNOSIS_ACTIONS.SET_MODULES,
        payload: { modules: fetchedModules },
      });
    };
    fetchModulesFromDb();
  }, []);

  const addDiagnose = (moduleCode, diagnosis) => {
    dispatch({
      type: DIAGNOSIS_ACTIONS.ADD_DIAGNOSIS,
      payload: { moduleCode, diagnosis },
    });
  };
  const setModuleVisited = (moduleCode) => {
    dispatch({
      type: DIAGNOSIS_ACTIONS.SET_VISITED,
      payload: { moduleCode },
    });
  };

  const addAnswers = (moduleCode, answers, isMinor) => {
    dispatch({
      type: DIAGNOSIS_ACTIONS.ADD_ANSWERS,
      payload: { moduleCode, answers, isMinor },
    });
  };

  const addModuleQuestions = (moduleCode, questions, isMinor) => {
    dispatch({
      type: DIAGNOSIS_ACTIONS.ADD_MODULE_QUESTIONS,
      payload: { moduleCode, questions, isMinor },
    });
  };

  const deleteDiagnosis = (moduleCode, diseaseICD10) => {
    dispatch({
      type: DIAGNOSIS_ACTIONS.DELETE_DIAGNOSIS,
      payload: { moduleCode, diseaseICD10 },
    });
  };

  const resetModuleDiagnosis = (moduleCode) => {
    dispatch({
      type: DIAGNOSIS_ACTIONS.RESET_MODULE_DIAGNOSIS,
      payload: { moduleCode },
    });
  };

  const saveInDB = async () => {
    const modules = await state.modules;
    const id = await state.patientId;

    const diseases = await database.getAllFromTable(TABLES.diseases);
    for (let i = 0; i < Object.values(modules).length; i += 1) {
      const module = Object.values(modules)[i];
      if (module.diagnosis) {
        for (let j = 0; j < module.diagnosis.length; j += 1) {
          const { id: diseaseId } = diseases.filter((disease) => {
            return disease.disease_icd10 === module.diagnosis[j].disease_icd10;
          })[0];
          const patientDiagnosis = {
            patient_id: id,
            disease_id: diseaseId,
            timestamp: new Date().getTime() / 1000,
          };
          try {
            // eslint-disable-next-line no-await-in-loop
            const diagnosisId = await database.insertObjectToTable(
              patientDiagnosis,
              TABLES.patients_diagnosis
            );

            const majorAnswers = module.majorAnswers.map((answer, idx) => {
              return {
                diagnosis_id: diagnosisId,
                answer,
                question_id: module.majorQuestions[idx].id,
              };
            });

            const minorAnswers = module.minorAnswers.map((answer, idx) => {
              return {
                diagnosis_id: diseaseId,
                answer,
                question_id: module.minorQuestions[idx].id,
              };
            });

            // eslint-disable-next-line no-await-in-loop
            await database.insertMultipleObjectsToTable(
              majorAnswers.concat(minorAnswers),
              TABLES.diagnosis_answers
            );
          } catch (e) {
            return;
          }
        }
      }
    }
  };
  const value = {
    ...state,
    setModuleVisited,
    addDiagnose,
    addAnswers,
    saveInDB,
    deleteDiagnosis,
    resetModuleDiagnosis,
    addModuleQuestions,
  };

  return (
    <DiagnosisContext.Provider value={value}>
      {children}
    </DiagnosisContext.Provider>
  );
}

DiagnosisContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  patientId: PropTypes.number.isRequired,
};

export default DiagnosisContextProvider;
