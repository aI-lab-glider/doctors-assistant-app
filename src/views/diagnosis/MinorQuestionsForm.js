import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import calculateDiseasesProbability from "../../modules/diagnosis/calculateDiseasesProbability";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";
import useDiagnosisForm from "../../modules/hooks/useDiagnosisForm";
import AppButton from "../../components/common/AppButton";

const MinorQuestionsForm = ({ navigation, route }) => {
  const { module, majorAnswers } = route.params;
  const { code: moduleCode } = module;
  const [questions, answers, setAnswerByIndex] = useDiagnosisForm(module, 1);

  const onSubmit = () => {
    const diseasesProbability = calculateDiseasesProbability(
      majorAnswers,
      answers,
      moduleCode
    );
    navigation.navigate("Results", { diseasesProbability, module });
  };

  return (
    <DiagnosisContainer module={module}>
      <DiagnosisForm
        onSubmit={onSubmit}
        setAnswerByIndex={setAnswerByIndex}
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
  },
});

MinorQuestionsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      module: modulePropTypes.isRequired,
      majorAnswers: PropTypes.arrayOf(
        PropTypes.oneOfType(PropTypes.bool || undefined)
      ).isRequired,
    }).isRequired,
  }).isRequired,
};
export default MinorQuestionsForm;
