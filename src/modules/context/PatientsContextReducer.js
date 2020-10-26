export const PATIENT_ACTIONS = {
  INSERT_OR_UPDATE: "INSERT_OR_UPDATE",
  REFRESH: "REFRESH",
};

const reducer = (state, action) => {
  switch (action.type) {
    case PATIENT_ACTIONS.INSERT_OR_UPDATE: {
      const { patient: setPatient } = action.payload;
      const { patients } = state;

      const patientIndex = state.patients.findIndex((patient) => {
        return patient.id === setPatient.id;
      });
      if (patientIndex !== -1) {
        patients[patientIndex] = setPatient;
      } else {
        patients.push(setPatient);
      }

      return {
        ...state,
        patients,
      };
    }
    case PATIENT_ACTIONS.REFRESH: {
      const { patients } = action.payload;
      return {
        ...state,
        patients,
      };
    }
    default:
      return state;
  }
};

export default reducer;
