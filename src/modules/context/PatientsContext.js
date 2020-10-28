import Builder from "crane-query-builder";
import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import reducer, { PATIENT_ACTIONS } from "./PatientsContextReducer";
import { database, TABLES } from "../database/database";

export const PatientsContext = createContext({
  patients: [],
});

function PatientsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    patients: [],
  });

  useEffect(() => {
    const refreshPatients = async () => {
      const patients = await database.getAllFromTable(TABLES.patients);
      try {
        // Get all diagnosis
        const builder = Builder()
          .table(TABLES.patients_diagnosis)
          .join(
            TABLES.diagnosis,
            `${TABLES.patients_diagnosis}.diagnosis_id`,
            "=",
            `${TABLES.diagnosis}.id`
          );
        const allDiagnosis = await builder.get();
        const diagnosisByPatientId = {};

        // Divide diagnosis per patient
        allDiagnosis.forEach((diagnosis) => {
          const singlePatientDiagnosis =
            diagnosisByPatientId[diagnosis.patient_id] || [];
          singlePatientDiagnosis.push(diagnosis);
          diagnosisByPatientId[diagnosis.patient_id] = singlePatientDiagnosis;
        });

        // Assign diagnosis to each patient
        patients.forEach((patient, index) => {
          patients[index].diagnosis = diagnosisByPatientId[patient.id];
        }, patients);

        dispatch({
          type: PATIENT_ACTIONS.REFRESH,
          payload: { patients },
        });
      } catch (e) {
        console.log(`DB error get diagnosis ${e.message}`);
      }
    };

    refreshPatients();
  }, []);

  const addPatient = async (patient) => {
    const id = await database.insertObjectToTable(patient, TABLES.patients);
    if (id) {
      const patientWithId = patient;
      patientWithId.id = id;
      dispatch({
        type: PATIENT_ACTIONS.INSERT_OR_UPDATE,
        payload: { patient: patientWithId },
      });
    }
    return id;
  };

  const value = {
    ...state,
    addPatient,
  };

  return (
    <PatientsContext.Provider value={value}>
      {children}
    </PatientsContext.Provider>
  );
}

PatientsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PatientsContextProvider;
