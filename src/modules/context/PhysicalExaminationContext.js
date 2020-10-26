import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import physicalExaminationReducer, {
  PHYSICAL_EXAMINATION_ACTIONS,
} from "./PhysicalExaminationReducer";
import patientsPhysicalExamination from "../../constants/data/patientsPhysicalExamination";
import { database, TABLES } from "../database/database";

export const PhysicalExaminationContext = createContext({
  patientsPhysicalExamination: [],
});

const initialState = { patientsPhysicalExamination };

function PhysicalExaminationProvider({ children }) {
  const [state, dispatch] = useReducer(
    physicalExaminationReducer,
    initialState
  );

  useEffect(() => {
    const refreshPhysicalExamination = async () => {
      const physicalExaminations = await database.getAllFromTable(
        TABLES.physical_examination
      );
      dispatch({
        type: PHYSICAL_EXAMINATION_ACTIONS.REFRESH,
        payload: { physicalExaminations },
      });
    };

    refreshPhysicalExamination();
  }, []);

  const setPhysicalExamination = async (physicalExamination) => {
    const id = await database.insertObjectToTable(
      physicalExamination,
      TABLES.physical_examination
    );
    if (id) {
      const examinationWithId = physicalExamination;
      examinationWithId.id = id;
      dispatch({
        type: PHYSICAL_EXAMINATION_ACTIONS.INSERT_OR_UPDATE,
        payload: { physicalExamination: examinationWithId },
      });
    }
    return id;
  };

  const updatePhysicalExamination = async (physicalExamination) => {
    const result = await database.updateObjectFromTable(
      physicalExamination,
      TABLES.physical_examination
    );
    if (result) {
      dispatch({
        type: PHYSICAL_EXAMINATION_ACTIONS.INSERT_OR_UPDATE,
        payload: { physicalExamination },
      });
    }
    return result;
  };

  const value = {
    ...state,
    setPhysicalExamination,
    updatePhysicalExamination,
  };

  return (
    <PhysicalExaminationContext.Provider value={value}>
      {children}
    </PhysicalExaminationContext.Provider>
  );
}

PhysicalExaminationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PhysicalExaminationProvider;
