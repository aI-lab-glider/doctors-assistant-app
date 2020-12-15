import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import Checkbox from "../common/Checkbox";
import FormError from "../forms/fields/FormError";
import formStyles from "../../constants/styles/formStyles";
import { Colors, Typography } from "../../constants/styles";

const DiagnosisQuestionItem = React.memo(
  ({ question, index, defaultAnswer }) => {
    const [answer, setLocalAnswer] = useState(defaultAnswer);

    const { errors, touched, setFieldValue, values } = useFormikContext();

    const setNewAnswer = (newAnswer) => {
      setLocalAnswer(newAnswer);
      values.answers.splice(index, 1, newAnswer);
      setFieldValue("answers", values.answers);
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
            !!errors.answers && !!errors.answers[index]
              ? errors.answers[index]
              : null
          }
          visible={!!touched.answers}
        />
      </View>
    );
  },
  (prevProps, nextProps) => prevProps.index === nextProps.index
);

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

DiagnosisQuestionItem.defaultProps = {
  defaultAnswer: -1,
};

DiagnosisQuestionItem.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  defaultAnswer: PropTypes.oneOf([-1, 0, 1]),
};
export default DiagnosisQuestionItem;
