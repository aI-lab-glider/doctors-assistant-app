import React from "react";
import PropTypes from "prop-types";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import calculateDiseasesProbability from "../../modules/diagnosis/calculateDiseasesProbability";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";
import useDiagnosisForm from "../../modules/hooks/useDiagnosisForm";

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
      />
    </DiagnosisContainer>
  );
};

MinorQuestionsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      module: modulePropTypes.isRequired,
      majorAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
    }).isRequired,
  }).isRequired,
};
export default MinorQuestionsForm;
