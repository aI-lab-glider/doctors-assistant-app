const physicalExaminationReducer = (state, action) => {
  switch (action.type) {
    case "SET_PHYSICAL_EXAMINATION": {
      const { physicalExamination: setPhysicalExamination } = action.payload;
      const { patientsPhysicalExamination } = state;

      const physicalExaminationIndex = state.patientsPhysicalExamination.findIndex(
        (physicalExamination) => {
          return physicalExamination.id === setPhysicalExamination.id;
        }
      );
      if (physicalExaminationIndex !== -1) {
        patientsPhysicalExamination[
          physicalExaminationIndex
        ] = setPhysicalExamination;
      } else {
        patientsPhysicalExamination.push(setPhysicalExamination);
      }

      return {
        ...state,
        patientsPhysicalExamination,
      };
    }
    case "REFRESH": {
      const { physicalExamination } = action.payload;
      return {
        ...state,
        physicalExamination,
      };
    }
    default:
      return state;
  }
};

export default physicalExaminationReducer;
