import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Builder from "crane-query-builder";
import goOnDetailsQuestions from "../../modules/diagnosis/goOnDetailsQuestions";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";
import { TABLES } from "../../modules/database/database";

const MajorQuestionsForm = ({ navigation, route }) => {
  const { module } = route.params;
  const { code: moduleCode } = module;

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestionFromDb = async () => {
      const moduleMinorQuestions = await Builder()
        .table(TABLES.questions)
        .where("module_code", module.code)
        .where("minor", 0)
        .get();
      setQuestions(moduleMinorQuestions);
    };
    fetchQuestionFromDb();
  }, [module]);

  const majorAnswers = Array(questions.length).fill(undefined);

  const onSubmit = () => {
    const checkedAnswers = majorAnswers.filter(
      (answer) => answer !== undefined
    );

    const allCheckboxChecked = checkedAnswers.length === majorAnswers.length;
    if (allCheckboxChecked === true) {
      if (goOnDetailsQuestions(moduleCode, majorAnswers)) {
        navigation.navigate("Minor", { module, majorAnswers });
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
    } else {
      Alert.alert("Błąd", "Wykryto brakujące odpowiedzi", [
        {
          text: "Popraw",
          style: "cancel",
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <DiagnosisContainer module={module}>
      <DiagnosisForm
        onSubmit={onSubmit}
        answers={majorAnswers}
        questions={questions}
      />
    </DiagnosisContainer>
  );
};

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
