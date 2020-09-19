const basicDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_BASIC_DATA": {
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
    default:
      return state;
  }
};

export default basicDataReducer;
