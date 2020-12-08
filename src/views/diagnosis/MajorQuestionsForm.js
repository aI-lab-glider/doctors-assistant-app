import React from "react";
import PropTypes from "prop-types";
import { Alert, StyleSheet } from "react-native";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";
import useDiagnosisForm from "../../modules/hooks/useDiagnosisForm";
import TextButton from "../../components/common/TextButton";

const MajorQuestionsForm = ({ navigation, route }) => {
  const { module } = route.params;

  const [questions, answers] = useDiagnosisForm(module, 0);

  const goOnDetailsQuestions = (answersValues) => {
    return answersValues.reduce((a, b) => a + b, 0) >= module.min_major_true;
  };

  const onSubmit = (answersValues) => {
    if (goOnDetailsQuestions(answersValues)) {
      navigation.navigate("Minor", { module, majorAnswers: answersValues });
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
        questions={questions}
        answers={answers}
        footerComponent={
          <TextButton onPress={onSubmit} text="Sprawdź warunki podstawowe" />
        }
        footerComponentStyle={styles.footerComponentStyle}
      />
    </DiagnosisContainer>
  );
};

const styles = StyleSheet.create({
  footerComponentStyle: {
    marginTop: 20,
  },
});

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
