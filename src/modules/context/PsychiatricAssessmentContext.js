import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import psychiatricAssessmentReducer from "./PsychiatricAssessmentReducer";
import patientsPsychiatricAssessment from "../../constants/data/patientsPsychiatricAssessment";
import { database, TABLES } from "../database/database";

export const PsychiatricAssessmentContext = createContext({
  patientsPsychiatricAssessment: [],
});

const initialState = { patientsPsychiatricAssessment };

function PsychiatricAssessmentProvider({ children }) {
  const [state, dispatch] = useReducer(
    psychiatricAssessmentReducer,
    initialState
  );

  useEffect(() => {
    const refreshPsychiatricAssessment = async () => {
      const psychiatricAssessment = await database.getAllFromTable(
        TABLES.psychiatric_assessment
      );
      dispatch({ type: "REFRESH", payload: { psychiatricAssessment } });
    };

    refreshPsychiatricAssessment();
  }, []);

  const setPsychiatricAssessment = async (psychiatricAssessment) => {
    const id = await database.insertObjectToTable(
      psychiatricAssessment,
      TABLES.psychiatric_assessment
    );
    if (id) {
      const assessmentWithId = psychiatricAssessment;
      assessmentWithId.id = id;
      dispatch({
        type: "SET_PSYCHIATRIC_ASSESSMENT",
        payload: { psychiatricAssessment: assessmentWithId },
      });
    }
    return id;
  };

  const value = {
    ...state,
    setPsychiatricAssessment,
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
