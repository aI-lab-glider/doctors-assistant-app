const reducer = (state, action) => {
  switch (action.type) {
    case "INSERT_OR_UPDATE_PATIENT": {
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
    case "REFRESH_PATIENTS": {
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
