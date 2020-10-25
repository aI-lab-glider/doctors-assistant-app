import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import goOnDetailsQuestions from "../../modules/diagnosis/goOnDetailsQuestions";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";

const MajorQuestionsForm = ({ navigation, route }) => {
  const { module } = route.params;
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

  const majorAnswers = Array(questions.length).fill(undefined);

  const onSubmit = () => {
    if (goOnDetailsQuestions(moduleCode, majorAnswers)) {
      navigation.navigate("Minor", { module, majorAnswers });
    } else {
      Alert.alert(
        "Informacja",
        "Pacjent nie spełnia warunków podstawowych modułu",
        [
          {
            text: "Ok",
            style: "cancel",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]
      );
    }
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

MajorQuestionsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      module: modulePropTypes.isRequired,
    }).isRequired,
  }).isRequired,
};
export default MajorQuestionsForm;
