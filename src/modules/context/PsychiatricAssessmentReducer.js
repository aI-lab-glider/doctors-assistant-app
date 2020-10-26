export const PSYCHIATRIC_ASSESSMENT_ACTIONS = {
  INSERT_OR_UPDATE: "INSERT_OR_UPDATE",
  REFRESH: "REFRESH",
};

const psychiatricAssessmentReducer = (state, action) => {
  switch (action.type) {
    case PSYCHIATRIC_ASSESSMENT_ACTIONS.INSERT_OR_UPDATE: {
      const {
        psychiatricAssessment: setPsychiatricAssessment,
      } = action.payload;
      const { patientsPsychiatricAssessment } = state;

      const psychiatricAssessmentIndex = state.patientsPsychiatricAssessment.findIndex(
        (psychiatricAssessment) => {
          return psychiatricAssessment.id === setPsychiatricAssessment.id;
        }
      );
      if (psychiatricAssessmentIndex !== -1) {
        patientsPsychiatricAssessment[
          psychiatricAssessmentIndex
        ] = setPsychiatricAssessment;
      } else {
        patientsPsychiatricAssessment.push(setPsychiatricAssessment);
      }

      return {
        ...state,
        patientsPsychiatricAssessment,
      };
    }
    case PSYCHIATRIC_ASSESSMENT_ACTIONS.REFRESH: {
      const { psychiatricAssessment } = action.payload;
      return {
        ...state,
        psychiatricAssessment,
      };
    }
    default:
      return state;
  }
};

export default psychiatricAssessmentReducer;
