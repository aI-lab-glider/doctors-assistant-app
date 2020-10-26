import { useEffect, useState } from "react";
import Builder from "crane-query-builder";
import { TABLES } from "../database/database";

const useDiagnosisForm = (module, minor) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const setDefaultAnswers = (moduleQuestions) => {
    setAnswers(Array(moduleQuestions.length).fill(undefined));
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
      const moduleQuestions = await Builder()
        .table(TABLES.questions)
        .where("module_code", module.code)
        .where("minor", minor)
        .get();
      setQuestions(moduleQuestions);
      setDefaultAnswers(moduleQuestions);
    };
    fetchQuestionFromDb();
  }, [module]);

  return [questions, answers, setAnswerByIndex];
};

export default useDiagnosisForm;
