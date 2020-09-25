import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import physicalExaminationReducer from "./PhysicalExaminationReducer";
import patientsPhysicalExamination from "../../constants/data/patientsPhysicalExamination";

export const PhysicalExaminationContext = createContext({
  patientsPhysicalExamination: [],
});

const initialState = { patientsPhysicalExamination };

function PhysicalExaminationProvider({ children }) {
  const [state, dispatch] = useReducer(
    physicalExaminationReducer,
    initialState
  );
  const value = {
    ...state,
    setPhysicalExamination: (physicalExamination) => {
      dispatch({
        type: "SET_PHYSICAL_EXAMINATION",
        payload: { physicalExamination },
      });
    },
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
