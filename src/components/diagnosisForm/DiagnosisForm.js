import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { FlatList, ViewPropTypes } from "react-native";
import { Formik, FieldArray } from "formik";
import DiagnosisQuestionItem from "./QuestionItem";
import diagnosisValidationSchema from "../../constants/validationSchemas/diagnosisValidationSchema";

const DiagnosisForm = ({
  questions,
  answers,
  footerComponent,
  footerComponentStyle,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{ answers }}
      validationSchema={diagnosisValidationSchema}
      validateOnChange
      validateOnBlur={false}
      onSubmit={() => {}}
    >
      {({ values, handleSubmit, isValid }) => (
        <FieldArray name="answers">
          {() => {
            return (
              <FlatList
                data={questions}
                keyExtractor={(question) => question.content}
                renderItem={({ item, index }) => (
                  <DiagnosisQuestionItem
                    question={item}
                    index={index}
                    defaultAnswer={answers[index]}
                  />
                )}
                ListFooterComponentStyle={footerComponentStyle}
                ListFooterComponent={() => {
                  const { onPress } = footerComponent.props;
                  return cloneElement(footerComponent, {
                    ...footerComponent.props,
                    onPress: () => {
                      handleSubmit();
                      if (isValid) {
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
