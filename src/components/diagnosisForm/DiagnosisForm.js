import React from "react";
import PropTypes from "prop-types";
import { Alert, FlatList } from "react-native";
import DiagnosisQuestionItem from "./QuestionItem";
import TextButton from "../common/TextButton";

const DiagnosisForm = ({ questions, setAnswerByIndex, onSubmit, answers }) => {
  const submitWithValidation = () => {
    const checkedAnswers = answers.filter((answer) => answer !== undefined);

    const allCheckboxChecked = checkedAnswers.length === answers.length;
    if (allCheckboxChecked === true) {
      onSubmit();
    } else {
      // TODO: Set all empty questions labels color to red and add some error message near them
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
    <FlatList
      data={questions}
      keyExtractor={(question) => question.content}
      renderItem={({ item, index }) => (
        <DiagnosisQuestionItem
          question={item}
          setAnswer={(answer) => {
            setAnswerByIndex(index, answer);
          }}
        />
      )}
      ListFooterComponentStyle={{ marginTop: 20 }}
      ListFooterComponent={
        <TextButton onPress={submitWithValidation} text="Sprawdź odpowiedzi" />
      }
    />
  );
};

DiagnosisForm.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  setAnswerByIndex: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
};

export default DiagnosisForm;
