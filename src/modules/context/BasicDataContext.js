import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import basicDataReducer from "./BasicDataContextReducer";
import { database } from "../database/database";

export const BasicDataContext = createContext({
  patientsBasicData: [],
});

function BasicDataContextProvider({ children }) {
  const [state, dispatch] = useReducer(basicDataReducer, {
    patientsBasicData: [],
  });

  useEffect(() => {
    refreshBasicData();
  }, []);

  const setBasicData = (basicData) => {
    dispatch({ type: "SET_BASIC_DATA", payload: { basicData } });
  };

  const refreshBasicData = () => {
    return database.getBasicPatientsData(setMultiplePatientsData);
  };

  const setMultiplePatientsData = (basicDataArray) => {
    basicDataArray.forEach((basicData) => {
      setBasicData(basicData);
    });
  };

  const value = {
    ...state,
    setBasicData,
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
