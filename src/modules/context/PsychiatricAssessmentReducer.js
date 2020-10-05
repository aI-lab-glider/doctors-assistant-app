const psychiatricAssessmentReducer = (state, action) => {
  switch (action.type) {
    case "SET_PSYCHIATRIC_ASSESSMENT": {
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
    default:
      return state;
  }
};

export default psychiatricAssessmentReducer;
