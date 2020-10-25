import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import calculateDiseasesProbability from "../../modules/diagnosis/calculateDiseasesProbability";

const MinorQuestionsForm = ({ navigation, route }) => {
  const { moduleCode, majorAnswers } = route.params;

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

  let minorAnswers = Array(questions.length).fill(undefined);

  const onSubmit = () => {
    // TODO: Remove displaying right questions
    minorAnswers = [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0];

    const diseasesProbability = calculateDiseasesProbability(
      majorAnswers,
      minorAnswers,
      moduleCode
    );
    console.log(diseasesProbability);
    navigation.navigate("Results", { diseasesProbability });
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

MinorQuestionsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      moduleCode: PropTypes.string.isRequired,
      majorAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
    }).isRequired,
  }).isRequired,
};
export default MinorQuestionsForm;
