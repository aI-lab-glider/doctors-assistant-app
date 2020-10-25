import { useEffect, useState } from "react";
import Builder from "crane-query-builder";
import { TABLES } from "../database/database";

const useDiagnosisForm = (module, minor) => {
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
        .where("minor", minor)
        .get();
      setQuestions(moduleMinorQuestions);
      setDefaultAnswers();
    };
    fetchQuestionFromDb();
  }, [module]);

  return [questions, answers, setAnswerByIndex];
};

export default useDiagnosisForm;
