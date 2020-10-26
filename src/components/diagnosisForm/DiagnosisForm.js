import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { Alert, FlatList, ViewPropTypes } from "react-native";
import DiagnosisQuestionItem from "./QuestionItem";

const DiagnosisForm = ({
  questions,
  setAnswerByIndex,
  answers,
  footerComponent,
  footerComponentStyle,
}) => {
  const onPressWithValidation = (onPress) => {
    const checkedAnswers = answers.filter((answer) => answer !== undefined);

    const allCheckboxChecked = checkedAnswers.length === answers.length;
    if (allCheckboxChecked === true) {
      onPress();
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

  const addValidationToFooterComponent = () => {
    const { onPress } = footerComponent.props;
    return cloneElement(footerComponent, {
      ...footerComponent.props,
      onPress: () => onPressWithValidation(onPress),
    });
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
      ListFooterComponentStyle={footerComponentStyle}
      ListFooterComponent={addValidationToFooterComponent()}
    />
  );
};

DiagnosisForm.defaultProps = {
  footerComponentStyle: {},
};
DiagnosisForm.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  setAnswerByIndex: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
  footerComponent: PropTypes.element.isRequired,
  footerComponentStyle: ViewPropTypes.style,
};

export default DiagnosisForm;
