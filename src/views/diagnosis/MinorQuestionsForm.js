import React from "react";
import PropTypes from "prop-types";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import calculateDiseasesProbability from "../../modules/diagnosis/calculateDiseasesProbability";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";

const MinorQuestionsForm = ({ navigation, route }) => {
  const { module, majorAnswers } = route.params;
  const { code: moduleCode } = module;
  // TODO: Fetch questions from database
  const questions = [
    {
      description: "Czy pacjent jest chory na chorobę?",
    },
    { description: "Czy pacjent NIE jest chory na chorobę?" },
    {
      description: "Czy pacjent mógłby być chory na chorobę?",
    },
    {
      description: "Czy pacjent mógłby być chory na chorobęaaa?",
    },
  ];

  let minorAnswers = Array(questions.length).fill(undefined);

  const onSubmit = () => {
    // TODO: Remove after displaying right questions
    minorAnswers = [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0];

    const diseasesProbability = calculateDiseasesProbability(
      majorAnswers,
      minorAnswers,
      moduleCode
    );
    navigation.navigate("Results", { diseasesProbability, module });
  };

  return (
    <DiagnosisContainer module={module}>
      <DiagnosisForm
        onSubmit={onSubmit}
        answers={majorAnswers}
        questions={questions}
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
