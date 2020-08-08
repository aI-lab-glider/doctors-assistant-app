const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PATIENT": {
      const { patient: setPatient } = action.payload;
      const { patients } = state;

      const patientIndex = state.patients.findIndex((patient) => {
        return patient.id === setPatient.id;
      });

      if (patientIndex !== -1) {
        patients[patientIndex] = setPatient;
      } else {
        patients.append(setPatient);
      }

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
