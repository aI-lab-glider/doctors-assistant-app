import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { FlatList, ViewPropTypes } from "react-native";
import { Formik, FieldArray } from "formik";
import DiagnosisQuestionItem from "./QuestionItem";

const DiagnosisForm = ({
  questions,
  answers,
  footerComponent,
  footerComponentStyle,
}) => {
  const validate = (values) => {
    const errors = { answers: [] };

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < questions.length; i++) {
      if (values.answers[i] == null)
        errors.answers[i] = "Wykryto brakującą odpowiedź";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ answers }}
      validate={validate}
      validateOnChange
      validateOnBlur={false}
      onSubmit={(values) => {
        validate(values);
      }}
    >
      {({ values, handleSubmit, errors }) => (
        <FieldArray name="answers">
          {() => {
            return (
              <FlatList
                data={questions}
                keyExtractor={(question) => question.content}
                renderItem={({ item, index }) => (
                  <>
                    <DiagnosisQuestionItem
                      name={`answers[${index}]`}
                      question={item}
                    />
                  </>
                )}
                ListFooterComponentStyle={footerComponentStyle}
                ListFooterComponent={() => {
                  const { onPress } = footerComponent.props;
                  return cloneElement(footerComponent, {
                    ...footerComponent.props,
                    onPress: () => {
                      handleSubmit(values);
                      if (errors.answers.length === 0) {
                        onPress(values.answers);
                      }
                    },
                  });
                }}
              />
            );
          }}
        </FieldArray>
      )}
    </Formik>
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
  answers: PropTypes.oneOfType([
    PropTypes.arrayOf(undefined),
    PropTypes.arrayOf(PropTypes.number),
  ]).isRequired,
  footerComponent: PropTypes.element.isRequired,
  footerComponentStyle: ViewPropTypes.style,
};

export default DiagnosisForm;
