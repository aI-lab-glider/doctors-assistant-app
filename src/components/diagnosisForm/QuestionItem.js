import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "../common/Checkbox";

const DiagnosisQuestionItem = ({ question, setAnswer }) => {
  const [answer, setLocalAnswer] = useState(undefined);

  const setNewAnswer = (newAnswer) => {
    setLocalAnswer(newAnswer);
    setAnswer(newAnswer);
  };

  return (
    <View>
      <Text style={styles.questionText}>{question.content}</Text>
      <View style={styles.answersContainer}>
        <View style={styles.singleAnswerContainer}>
          <Checkbox isChecked={answer === 1} onPress={() => setNewAnswer(1)} />
          <Text>Tak</Text>
        </View>
        <View style={styles.singleAnswerContainer}>
          <Checkbox isChecked={answer === 0} onPress={() => setNewAnswer(0)} />
          <Text>Nie</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  answersContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  singleAnswerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: { marginTop: 20 },
});

DiagnosisQuestionItem.propTypes = {
  question: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
  setAnswer: PropTypes.func.isRequired,
};
export default DiagnosisQuestionItem;
