export const DIAGNOSIS_ACTIONS = {
  ADD_DIAGNOSIS: "ADD_DIAGNOSIS",
  ADD_ANSWERS: "ADD_ANSWERS",
  REMOVE_DIAGNOSIS: "REMOVE_DIAGNOSIS",
  SET_MODULES: "SET_MODULES",
  SET_VISITED: "SET_VISITED",
  DELETE_DIAGNOSIS: "DELETE_DIAGNOSIS",
  RESET_MODULE_DIAGNOSIS: "RESET_MODULE_DIAGNOSIS",
  ADD_MODULE_QUESTIONS: "ADD_MODULE_QUESTIONS",
  UPDATE_DIAGNOSIS_DATA: "UPDATE_DIAGNOSIS_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case DIAGNOSIS_ACTIONS.SET_MODULES: {
      const newState = { ...state, modules: {} };
      const { modules } = action.payload;
      modules.forEach((module) => {
        newState.modules[module.code] = {};
        newState.modules[module.code].name = module.name;
        newState.modules[module.code].wasVisited = false;
        newState.modules[module.code].diagnosis = [];
        newState.modules[module.code].minMajorTrue = module.min_major_true;
      });
      return newState;
    }

    case DIAGNOSIS_ACTIONS.SET_VISITED: {
      const { moduleCode } = action.payload;
      const newState = state;
      newState.modules[moduleCode].wasVisited = true;

      return newState;
    }

    case DIAGNOSIS_ACTIONS.ADD_ANSWERS: {
      const { moduleCode, answers, isMinor } = action.payload;
      const newState = state;

      if (isMinor) {
        newState.modules[moduleCode].minorAnswers = answers;
      } else {
        newState.modules[moduleCode].majorAnswers = answers;
      }

      return newState;
    }

    case DIAGNOSIS_ACTIONS.ADD_MODULE_QUESTIONS: {
      const { moduleCode, questions, isMinor } = action.payload;
      const newState = state;

      if (isMinor) {
        newState.modules[moduleCode].minorQuestions = questions;
      } else {
        newState.modules[moduleCode].majorQuestions = questions;
      }

      return newState;
    }

    case DIAGNOSIS_ACTIONS.ADD_DIAGNOSIS: {
      const { moduleCode, diagnosis } = action.payload;
      const newState = state;
      newState.modules[moduleCode].diagnosis = diagnosis;

      return newState;
    }

    case DIAGNOSIS_ACTIONS.DELETE_DIAGNOSIS: {
      const { moduleCode, diseaseIcd10 } = action.payload;
      const newState = state;
      newState.modules[moduleCode].diagnosis = state.modules[
        moduleCode
      ].diagnosis.filter((diag) => {
        return diag.disease_icd10 !== diseaseIcd10;
      });

      return newState;
    }
    case DIAGNOSIS_ACTIONS.RESET_MODULE_DIAGNOSIS: {
      const { moduleCode } = action.payload;
      const newState = state;
      newState.modules[moduleCode].diagnosis = [];

      return newState;
    }
    case DIAGNOSIS_ACTIONS.UPDATE_DIAGNOSIS_DATA: {
      const {
        diagnosisId,
        diagnosisIdx,
        timestamp,
        moduleCode,
      } = action.payload;
      const newState = state;
      newState.modules[moduleCode].diagnosis[diagnosisIdx].id = diagnosisId;
      newState.modules[moduleCode].diagnosis[
        diagnosisIdx
      ].timestamp = timestamp;

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
