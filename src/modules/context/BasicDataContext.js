import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import basicDataReducer, {
  BASIC_DATA_ACTIONS,
} from "./BasicDataContextReducer";
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
      dispatch({
        type: BASIC_DATA_ACTIONS.REFRESH,
        payload: { patientsBasicData },
      });
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
        type: BASIC_DATA_ACTIONS.INSERT_OR_UPDATE,
        payload: { basicData: basicDataWithId },
      });
    }
    return id;
  };

  const updateBasicData = async (basicData) => {
    const result = await database.updateObjectFromTable(
      basicData,
      TABLES.patients_basic_data
    );
    if (result) {
      dispatch({
        type: BASIC_DATA_ACTIONS.INSERT_OR_UPDATE,
        payload: { basicData },
      });
    }
    return result;
  };
  const getBasicDataById = (id) => {
    return state.patientsBasicData.find((basicData) => {
      return basicData.id === id;
    });
  };

  const value = {
    ...state,
    setBasicData,
    updateBasicData,
    getBasicDataById,
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
