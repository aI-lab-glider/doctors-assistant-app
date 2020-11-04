import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import Checkbox from "../common/Checkbox";
import FormError from "../forms/fields/FormError";
import formStyles from "../../constants/styles/formStyles";
import { Colors, Typography } from "../../constants/styles";

const DiagnosisQuestionItem = ({ question, setAnswer }) => {
  const [answer, setLocalAnswer] = useState(undefined);
  const { errors, touched } = useFormikContext();

  const setNewAnswer = (newAnswer) => {
    setLocalAnswer(newAnswer);
    setAnswer(newAnswer);
  };

  return (
    <View>
      <Text style={styles.subtitleText}>{question.content}</Text>
      <View style={styles.answersContainer}>
        <View style={styles.singleAnswerContainer}>
          <Checkbox
            isChecked={answer === 1}
            onPress={() => setNewAnswer(1)}
            style={styles.icon}
          />
          <Text style={styles.text}>Tak</Text>
        </View>
        <View style={styles.singleAnswerContainer}>
          <Checkbox
            isChecked={answer === 0}
            onPress={() => setNewAnswer(0)}
            style={styles.icon}
          />
          <Text style={styles.text}>Nie</Text>
        </View>
      </View>
      <FormError
        error={
          !!errors.answers && !!errors.answers[question.id]
            ? errors.answers[question.id]
            : null
        }
        visible={!!touched.answers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  answersContainer: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 60,
    marginRight: 30,
  },
  singleAnswerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitleText: { ...formStyles.subtitleText, marginLeft: 10 },
  icon: {
    flex: 0.4,
    alignSelf: "flex-end",
  },
  text: {
    flex: 0.6,
    fontSize: Typography.FONT_SIZE_13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.BLACK,
  },
});

DiagnosisQuestionItem.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string.isRequired,
  }).isRequired,
  setAnswer: PropTypes.func.isRequired,
};
export default DiagnosisQuestionItem;
