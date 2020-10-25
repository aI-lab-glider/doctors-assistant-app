import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import TextButton from "../../components/modulesList/TextButton";
import DiagnosisQuestionItem from "../../components/diagnosisForm/QuestionItem";

const MinorQuestionsForm = ({ navigation, route }) => {
  const { moduleCode } = route;
  const questions = [
    {
      description: "Czy pacjent jest chory na chorobę?",
    },
    { description: "Czy pacjent NIE jest chory na chorobę?" },
    {
      description: "Czy pacjent mógłby być chory na chorobę?",
    },
  ];

  const formState = Array(questions.length).fill(undefined);

  // TODO: ADD form valdation
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
                formState[index] = answer;
              }}
            />
          )}
          ListFooterComponentStyle={{ marginTop: 20 }}
          ListFooterComponent={
            <TextButton
              onPress={() => {
                navigation.navigate("Results");
              }}
              text="Sprawdź odpowiedzi"
            />
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
  }).isRequired,
  route: PropTypes.shape({
    moduleCode: PropTypes.string.isRequired,
  }).isRequired,
};
export default MinorQuestionsForm;
