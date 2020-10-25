import React from "react";
import PropTypes from "prop-types";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import TextButton from "../../components/common/TextButton";
import DiagnosisQuestionItem from "../../components/diagnosisForm/QuestionItem";
import goOnDetailsQuestions from "../../modules/diagnosis/goOnDetailsQuestions";

const MinorQuestionsForm = ({ navigation, route }) => {
  const { moduleCode } = route.params;
  const questions = [
    {
      description: "Czy pacjent jest chory na chorobę?",
    },
    { description: "Czy pacjent NIE jest chory na chorobę?" },
    {
      description: "Czy pacjent mógłby być chory na chorobę?",
    },
    {
      description: "Czy pacjent mógłby być chory na chorobę?",
    },
  ];

  const majorAnswers = Array(questions.length).fill(undefined);

  const onSubmit = () => {
    if (goOnDetailsQuestions(moduleCode, majorAnswers)) {
      navigation.navigate("Results");
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
        <Text>{moduleCode}</Text>
        <FlatList
          data={questions}
          keyExtractor={(question) => question.description}
          renderItem={({ item, index }) => (
            <DiagnosisQuestionItem
              question={item}
              setAnswer={(answer) => {
                majorAnswers[index] = answer;
              }}
            />
          )}
          ListFooterComponentStyle={{ marginTop: 20 }}
          ListFooterComponent={
            <TextButton onPress={onSubmit} text="Sprawdź odpowiedzi" />
          }
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
    }).isRequired,
  }).isRequired,
};
export default MinorQuestionsForm;
