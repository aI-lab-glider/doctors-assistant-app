import React from "react";
import PropTypes from "prop-types";
import { Alert, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";
import goOnDetailsQuestions from "../../modules/diagnosis/goOnDetailsQuestions";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";

const MajorQuestionsForm = ({ navigation, route }) => {
  const { moduleCode } = route.params;

  // TODO: Fetch questions from database
  const questions = [
    {
      description: "Czy pacjent jest chory na chorobę?",
    },
    { description: "Czy pacjent NIE jest chory na chorobę?" },
    {
      description: "Czy pacjent mógłby być chory na chorobę?",
    },
    {
      description: "Czy pacjent mógłby być chory na chorobęaaa?",
    },
  ];

  const majorAnswers = Array(questions.length).fill(undefined);

  const onSubmit = () => {
    if (goOnDetailsQuestions(moduleCode, majorAnswers)) {
      navigation.navigate("Minor", { moduleCode, majorAnswers });
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

  // TODO: ADD form validation - Maybe formik would be better here
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <DiagnosisForm
          onSubmit={onSubmit}
          answers={majorAnswers}
          questions={questions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 16,
    justifyContent: "center",
    padding: 20,
  },
  questionText: { marginTop: 20 },
});

MajorQuestionsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      moduleCode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default MajorQuestionsForm;
