import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";
import DiagnosisContainer from "./DiagnosisContainer";
import ModulesList from "../../components/modulesList/List";
import { DiagnosisContext } from "../../modules/context/DiagnosisContext";

const ModulesListScreen = ({ navigation }) => {
  const { setModuleVisited, modules, saveInDB } = useContext(DiagnosisContext);
  const onItemPress = (moduleCode) => {
    setModuleVisited(moduleCode);
    navigation.navigate("Major", { moduleCode });
  };

  const onFinishPress = async () => {
    await saveInDB();
    navigation.navigate("PatientCard");
  };

  return (
    <DiagnosisContainer>
      {modules ? (
        <ModulesList onItemPress={onItemPress} onFinishPress={onFinishPress} />
      ) : (
        <ActivityIndicator />
      )}
    </DiagnosisContainer>
  );
};

ModulesListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default ModulesListScreen;
