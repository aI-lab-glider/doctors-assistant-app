import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, Alert } from "react-native";
import DiagnosisContainer from "./DiagnosisContainer";
import ModulesList from "../../components/modulesList/List";
import { DiagnosisContext } from "../../modules/context/DiagnosisContext";
import { PatientsContext } from "../../modules/context/PatientsContext";

const ModulesListScreen = ({ navigation }) => {
  const { setModuleVisited, modules, saveInDB, patientId } = useContext(
    DiagnosisContext
  );
  const { addNewDiagnosisResults } = useContext(PatientsContext);
  const onItemPress = (moduleCode) => {
    setModuleVisited(moduleCode);
    navigation.navigate("Major", { moduleCode });
  };

  const onFinishPress = async () => {
    await saveInDB();
    const diagnosisArrays = Object.keys(modules).map((moduleCode) => {
      return modules[moduleCode].diagnosis.map((diag) => {
        return {
          id: diag.id,
          disease_icd10: diag.disease_icd10,
          disease_name: diag.disease_name,
          module_code: moduleCode,
          module_name: modules[moduleCode].name,
          timestamp: diag.timestamp,
        };
      });
    });
    const flattenedDiagnosis = diagnosisArrays.flat(1);

    if (flattenedDiagnosis !== undefined && flattenedDiagnosis.length > 0) {
      addNewDiagnosisResults(flattenedDiagnosis, patientId);
      navigation.navigate("PatientCard");
    } else {
      Alert.alert(
        "",
        "Brak rozpoznania. Czy na pewno chcesz zakończyć diagnozę?",
        [
          {
            text: "Kontynuuj",
            style: "cancel",
            onPress: () => {},
          },
          {
            text: "Zakończ",
            style: "destructive",
            onPress: () => {
              navigation.navigate("PatientCard");
            },
          },
        ]
      );
    }
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
