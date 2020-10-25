import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Builder from "crane-query-builder";
import PropTypes from "prop-types";
import DiagnosisForm from "../../components/diagnosisForm/DiagnosisForm";
import calculateDiseasesProbability from "../../modules/diagnosis/calculateDiseasesProbability";
import DiagnosisContainer from "./DiagnosisContainer";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";
import { TABLES } from "../../modules/database/database";

const MinorQuestionsForm = ({ navigation, route }) => {
  const { module, majorAnswers } = route.params;
  const { code: moduleCode } = module;
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const setDefaultAnswers = () => {
    setAnswers(Array(questions.length).fill(undefined));
  };

  const setAnswerByIndex = (index, answer) => {
    if (index > answer.length) {
      console.warn("Anwer array out of bounds");
    } else {
      const newAnswers = answers;
      newAnswers[index] = answer;
      setAnswers(newAnswers);
    }
  };

  useEffect(() => {
    const fetchQuestionFromDb = async () => {
      const moduleMinorQuestions = await Builder()
        .table(TABLES.questions)
        .where("module_code", module.code)
        .where("minor", 1)
        .get();
      setQuestions(moduleMinorQuestions);
      setDefaultAnswers();
    };
    fetchQuestionFromDb();
  }, [module]);

  const onSubmit = () => {
    const checkedAnswers = answers.filter((answer) => answer !== undefined);

    const allCheckboxChecked = checkedAnswers.length === answers.length;
    if (allCheckboxChecked === true) {
      const diseasesProbability = calculateDiseasesProbability(
        majorAnswers,
        answers,
        moduleCode
      );
      navigation.navigate("Results", { diseasesProbability, module });
    } else {
      // TODO: Set all empty questions labels to red and add some error message near them
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
        setAnswerByIndex={setAnswerByIndex}
        questions={questions}
      />
    </DiagnosisContainer>
  );
};

MinorQuestionsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      module: modulePropTypes.isRequired,
      majorAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
    }).isRequired,
  }).isRequired,
};
export default MinorQuestionsForm;
