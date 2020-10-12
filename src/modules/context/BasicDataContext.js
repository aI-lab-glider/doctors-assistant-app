import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import basicDataReducer from "./BasicDataContextReducer";
import { database, TABLES } from "../database/database";

export const BasicDataContext = createContext({
  patientsBasicData: [],
});

function BasicDataContextProvider({ children }) {
  const [state, dispatch] = useReducer(basicDataReducer, {
    patientsBasicData: [],
  });

  useEffect(() => {
    const refreshBasicData = async () => {
      const patientsBasicData = await database.getAllFromTable(
        TABLES.patients_basic_data
      );
      dispatch({ type: "REFRESH_BASIC_DATA", payload: { patientsBasicData } });
    };

    refreshBasicData();
  }, []);

  const setBasicData = async (basicData) => {
    const id = await database.insertObjectToTable(
      basicData,
      TABLES.patients_basic_data
    );
    if (id) {
      const basicDataWithId = basicData;
      basicDataWithId.id = id;
      dispatch({
        type: "SET_BASIC_DATA",
        payload: { basicData: basicDataWithId },
      });
    }
    return id;
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
