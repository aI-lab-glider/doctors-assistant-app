export const BASIC_DATA_ACTIONS = {
  INSERT_OR_UPDATE: "INSERT_OR_UPDATE",
  REFRESH: "REFRESH",
};

const basicDataReducer = (state, action) => {
  switch (action.type) {
    case BASIC_DATA_ACTIONS.INSERT_OR_UPDATE: {
      const { basicData: setBasicData } = action.payload;
      const { patientsBasicData } = state;

      const basicDataIndex = state.patientsBasicData.findIndex((basicData) => {
        return basicData.id === setBasicData.id;
      });
      if (basicDataIndex !== -1) {
        patientsBasicData[basicDataIndex] = setBasicData;
      } else {
        patientsBasicData.push(setBasicData);
      }

      return {
        ...state,
        patientsBasicData,
      };
    }
    case BASIC_DATA_ACTIONS.REFRESH: {
      const { patientsBasicData } = action.payload;
      return {
        ...state,
        patientsBasicData,
      };
    }
    default:
      return state;
  }
};

export default basicDataReducer;
