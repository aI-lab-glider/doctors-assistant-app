import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import psychiatricAssessmentReducer from "./PsychiatricAssessmentReducer";
import patientsPsychiatricAssessment from "../../constants/data/patientsPsychiatricAssessment";

export const PsychiatricAssessmentContext = createContext({
  patientsPsychiatricAssessment: [],
});

const initialState = { patientsPsychiatricAssessment };

function PsychiatricAssessmentProvider({ children }) {
  const [state, dispatch] = useReducer(
    psychiatricAssessmentReducer,
    initialState
  );
  const value = {
    ...state,
    setPsychiatricAssessment: (psychiatricAssessment) => {
      dispatch({
        type: "SET_PSYCHIATRIC_ASSESSMENT",
        payload: { psychiatricAssessment },
      });
    },
  };

  return (
    <PsychiatricAssessmentContext.Provider value={value}>
      {children}
    </PsychiatricAssessmentContext.Provider>
  );
}

PsychiatricAssessmentProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PsychiatricAssessmentProvider;
