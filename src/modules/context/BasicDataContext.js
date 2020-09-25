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

  const setBasicData = (basicData) => {
    dispatch({ type: "SET_BASIC_DATA", payload: { basicData } });
  };

  useEffect(() => {
    const refreshBasicData = async () => {
      const patientsBasicData = await database.getBasicPatientsData();
      dispatch({ type: "REFRESH_BASIC_DATA", payload: { patientsBasicData } });
    };

    refreshBasicData();
  }, []);

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
