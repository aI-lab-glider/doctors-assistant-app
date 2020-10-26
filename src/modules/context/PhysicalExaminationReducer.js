export const PHYSICAL_EXAMINATION_ACTIONS = {
  INSERT_OR_UPDATE: "INSERT_OR_UPDATE",
  REFRESH: "REFRESH",
};

const physicalExaminationReducer = (state, action) => {
  switch (action.type) {
    case PHYSICAL_EXAMINATION_ACTIONS.INSERT_OR_UPDATE: {
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
    case PHYSICAL_EXAMINATION_ACTIONS.REFRESH: {
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
