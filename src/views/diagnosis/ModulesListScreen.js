import React, { useEffect, useState } from "react";
import Builder from "crane-query-builder";
import PropTypes from "prop-types";
import ModulesList from "../../components/modulesList/List";
import DiagnosisContainer from "./DiagnosisContainer";
import { TABLES } from "../../modules/database/database";

const ModulesListScreen = ({ navigation }) => {
  const [modules, setModules] = useState([]);
  useEffect(() => {
    const fetchModulesFromDb = async () => {
      const fetchedModules = await Builder().table(TABLES.modules).get();
      setModules(fetchedModules);
    };
    fetchModulesFromDb();
  }, []);

  const onItemPress = (module) => {
    navigation.navigate("Major", { module });
  };

  const onFinishPress = () => {
    navigation.goBack();
  };

  return (
    <DiagnosisContainer>
      <ModulesList
        onItemPress={onItemPress}
        modules={modules}
        onFinishPress={onFinishPress}
      />
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
