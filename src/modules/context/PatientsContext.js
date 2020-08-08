import React, { createContext } from "react";
import PropTypes from "prop-types";
import reducer from "./PatientsContextReduxer";
import patientsData from "../../constants/data/patientsData";

export const PatientsContext = createContext({
  patients: [],
});

const initialState = { patients: patientsData };

function PatientsContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {
    ...state,
    setPatient: (patient) => {
      dispatch({ type: "SET_PATIENT", payload: { patient } });
    },
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
