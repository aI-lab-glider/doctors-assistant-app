import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import basicDataReducer from "./BasicDataContextReducer";
import patientsBasicData from "../../constants/data/patientsBasicData";

export const BasicDataContext = createContext({
  patientsBasicData: [],
});

const initialState = { patientsBasicData };

function BasicDataContextProvider({ children }) {
  const [state, dispatch] = useReducer(basicDataReducer, initialState);
  const value = {
    ...state,
    setBasicData: (basicData) => {
      dispatch({ type: "SET_BASIC_DATA", payload: { basicData } });
    },
  };

  return (
    <BasicDataContext.Provider value={value}>
      {children}
    </BasicDataContext.Provider>
  );
}

BasicDataContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BasicDataContextProvider;
