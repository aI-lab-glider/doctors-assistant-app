import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Builder from "crane-query-builder";
import reducer, { DIAGNOSIS_ACTIONS } from "./DiagnosisReducer";
import { TABLES } from "../database/database";

export const DiagnosisContext = createContext({
  modules: {},
});

function DiagnosisContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {});

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

  const saveInDB = () => {};

  const value = {
    ...state,
    setModuleVisited,
    addDiagnose,
    addAnswers,
    saveInDB,
    deleteDiagnosis,
    resetModuleDiagnosis,
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
};

export default DiagnosisContextProvider;
