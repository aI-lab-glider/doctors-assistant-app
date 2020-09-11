import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./PatientsContextReducer";
import { database } from "../database/database";

export const PatientsContext = createContext({
  patients: [],
});

function PatientsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { patients: [] });

  useEffect(() => {
    refreshPatients();
  }, []);

  const refreshPatients = () => {
    return database.getPatients(setPatients);
  };

  const setPatient = (patient) => {
    dispatch({ type: "SET_PATIENT", payload: { patient } });
  };

  const setPatients = (patients) => {
    patients.forEach((patient) => {
      setPatient(patient);
    });
  };

  const value = {
    ...state,
    setPatient,
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
