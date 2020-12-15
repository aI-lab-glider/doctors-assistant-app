import React, { useContext } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import calculateDiseasesProbability from "../../modules/diagnosis/calculateDiseasesProbability";
import DiagnosisContainer from "./DiagnosisContainer";
import useDiagnosisForm from "../../modules/hooks/useDiagnosisForm";
import useDiagnosisConditions from "../../modules/hooks/useDiagnosisConditions";
import AppButton from "../../components/common/AppButton";
import { DiagnosisContext } from "../../modules/context/DiagnosisContext";

const MinorQuestionsForm = ({ navigation, route }) => {
  const {
    addAnswers,
    addModuleQuestions,
    modules,
    resetModuleDiagnosis,
  } = useContext(DiagnosisContext);
  const { moduleCode, majorAnswers } = route.params;
  const moduleAnswers = modules[moduleCode].minorAnswers;
  const isMinor = 1;
  const [questions, defaultAnswers] = useDiagnosisForm(moduleCode, isMinor);
  const answers = moduleAnswers || defaultAnswers;
  const [diagnosisData] = useDiagnosisConditions(moduleCode);

  const onSubmit = (answersValues) => {
    const diseasesProbability = calculateDiseasesProbability(
      majorAnswers,
      answersValues,
      moduleCode,
      diagnosisData
    );
    addAnswers(moduleCode, answersValues, isMinor);
    addModuleQuestions(moduleCode, questions, isMinor);
    resetModuleDiagnosis(moduleCode);
    navigation.navigate("Results", { diseasesProbability, moduleCode });
  };

  return (
    <DiagnosisContainer moduleCode={moduleCode}>
      <DiagnosisForm
        onSubmit={onSubmit}
        questions={questions}
        answers={answers}
        footerComponent={
          <AppButton
            icon="next_btn"
            onPress={onSubmit}
            iconStyle={styles.submitButtonStyle}
          />
        }
      />
    </DiagnosisContainer>
  );
};

const styles = StyleSheet.create({
  submitButtonStyle: {
    marginTop: 0,
    marginRight: 0,
  },
});

MinorQuestionsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      moduleCode: PropTypes.string.isRequired,
      majorAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  }).isRequired,
};
export default MinorQuestionsForm;
