import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import DiagnosisQuestionItem from "./QuestionItem";
import TextButton from "../common/TextButton";

// TODO: ADD form validation - Maybe formik would be better here
const DiagnosisForm = ({ questions, answers, onSubmit }) => {
  return (
    <FlatList
      data={questions}
      keyExtractor={(question) => question.description}
      renderItem={({ item, index }) => (
        <DiagnosisQuestionItem
          question={item}
          setAnswer={(answer) => {
            // TODO: Repair this
            // eslint-disable-next-line no-param-reassign
            answers[index] = answer;
          }}
        />
      )}
      ListFooterComponentStyle={{ marginTop: 20 }}
      ListFooterComponent={
        <TextButton onPress={onSubmit} text="Sprawdź odpowiedzi" />
      }
    />
  );
};

DiagnosisForm.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default DiagnosisForm;
