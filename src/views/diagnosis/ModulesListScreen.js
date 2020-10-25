import React from "react";
import PropTypes from "prop-types";
import ModulesList from "../../components/modulesList/List";
import DiagnosisContainer from "./DiagnosisContainer";

const ModulesListScreen = ({ navigation }) => {
  return (
    <DiagnosisContainer>
      <ModulesList navigation={navigation} />
    </DiagnosisContainer>
  );
};

ModulesListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ModulesListScreen;
