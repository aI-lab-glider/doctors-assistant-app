import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import goOnDetailsQuestions from "../../modules/diagnosis/goOnDetailsQuestions";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";
import useDiagnosisForm from "../../modules/hooks/useDiagnosisForm";

const MajorQuestionsForm = ({ navigation, route }) => {
  const { module } = route.params;
  const { code: moduleCode } = module;

  const [questions, answers, setAnswerByIndex] = useDiagnosisForm(module, 0);

  const onSubmit = () => {
    const checkedAnswers = answers.filter((answer) => answer !== undefined);

    const allCheckboxChecked = checkedAnswers.length === answers.length;
    if (allCheckboxChecked === true) {
      if (goOnDetailsQuestions(moduleCode, answers)) {
        navigation.navigate("Minor", { module, majorAnswers: answers });
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
    } else {
      Alert.alert("Błąd", "Wykryto brakujące odpowiedzi", [
        {
          text: "Popraw",
          style: "cancel",
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <DiagnosisContainer module={module}>
      <DiagnosisForm
        onSubmit={onSubmit}
        setAnswerByIndex={setAnswerByIndex}
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
