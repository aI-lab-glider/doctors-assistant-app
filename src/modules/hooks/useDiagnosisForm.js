import { useEffect, useState } from "react";
import Builder from "crane-query-builder";
import { TABLES } from "../database/database";

const useDiagnosisForm = (moduleCode, minor) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const setDefaultAnswers = (moduleQuestions) => {
    setAnswers(Array(moduleQuestions.length).fill(-1));
  };

  useEffect(() => {
    const fetchQuestionFromDb = async () => {
      const moduleQuestions = await Builder()
        .table(TABLES.questions)
        .where("module_code", moduleCode)
        .where("minor", minor)
        .get();
      setQuestions(moduleQuestions);
      setDefaultAnswers(moduleQuestions);
    };
    fetchQuestionFromDb();
  }, [module]);

  return [questions, answers];
};

export default useDiagnosisForm;
