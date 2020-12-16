export const PATIENT_ACTIONS = {
  INSERT_OR_UPDATE: "INSERT_OR_UPDATE",
  REFRESH: "REFRESH",
  ADD_NEW_DIAGNOSIS_RESULTS: "ADD_NEW_DIAGNOSIS_RESULTS",
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
    case PATIENT_ACTIONS.ADD_NEW_DIAGNOSIS_RESULTS: {
      const { diagnosisResults, patientId } = action.payload;
      const { patients } = state;
      const idx = state.patients.findIndex(
        (patient) => patient.id === patientId
      );
      if (idx !== -1) {
        const patient = patients[idx];
        patient.diagnosis = patient.diagnosis
          ? patient.diagnosis.concat(diagnosisResults)
          : diagnosisResults;
        patients[idx] = patient;
        return {
          ...state,
          patients,
        };
      }

      return state;
    }
    default:
      return state;
  }
};

export default reducer;
