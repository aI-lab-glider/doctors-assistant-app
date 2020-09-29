/**
 * Decide about flow going on to details question
 * @param {Array} major_answers - Array with major questions answers
 * @param {Array} min_major_true - Array with minor questions answers
 * @return {Object} - Json with diseases probabilities
 */

import * as diagnosisData from "../../assets/diagnosis_data/diagnosis_data.json";

function compareWithAnswers(
  questions,
  comparisonSign,
  comparisonValue,
  allAnswers
) {
  let sumOfTrueAnswers = 0;
  questions.forEach((questionNr) => {
    if (allAnswers[Number(questionNr) - 1] === 1) {
      sumOfTrueAnswers += 1;
    }
  });

  switch (comparisonSign) {
    case "==":
      return sumOfTrueAnswers === comparisonValue;
    case ">":
      return sumOfTrueAnswers > comparisonValue;
    case ">=":
      return sumOfTrueAnswers >= comparisonValue;
    case "<":
      return sumOfTrueAnswers < comparisonValue;
    case "<=":
      return sumOfTrueAnswers <= comparisonValue;
    default:
      throw Error(`Wrong diagnosis data comparison sign: ${comparisonSign}`);
  }
}

function getCondValue(condition, allAnswers) {
  const condElements = condition.split(" ");

  const method = condElements[0].slice(0, 3);
  const questions = condElements[0].slice(4, -1).split(",");
  const comparisonSign = condElements[1];
  const comparisonValue = Number(condElements[2]);

  switch (method) {
    case "PYT":
      return compareWithAnswers(
        questions,
        comparisonSign,
        comparisonValue,
        allAnswers
      );
    default:
      return false;
  }
}

function goOnSideConds(allAnswers, diagnosisConditions) {
  let goOn = true;
  Object.keys(diagnosisConditions).forEach((cond) => {
    if (cond.slice(0, 4) === "main") {
      goOn = goOn && getCondValue(diagnosisConditions[cond], allAnswers);
    }
  });
  return goOn;
}

function calculateSingleDiseaseSideProbability(
  allAnswers,
  diagnosisConditions
) {
  let sideCondsNumbers = 0;
  let trueSideCondsNumbers = 0;
  Object.keys(diagnosisConditions).forEach((cond) => {
    if (cond.slice(0, 4) === "side" && diagnosisConditions[cond] !== "null") {
      sideCondsNumbers += 1;
      if (getCondValue(diagnosisConditions[cond], allAnswers)) {
        trueSideCondsNumbers += 1;
      }
    }
  });
  return Number((trueSideCondsNumbers / sideCondsNumbers).toFixed(2));
}

function getThisModuleData(thisModuleCode) {
  let thisModuleData;
  diagnosisData.default.forEach((module) => {
    if (module.module_code === thisModuleCode) {
      thisModuleData = module;
    }
  });
  return thisModuleData;
}

function calculateSingleDiseaseProbability(allAnswers, singleDiagnosisData) {
  const newRecord = {};
  newRecord.disease_icd10 = singleDiagnosisData.disease_icd10;
  newRecord.disease_name = singleDiagnosisData.disease_name;

  // eslint-disable-next-line camelcase
  const { diagnosis_conditions } = singleDiagnosisData;
  if (goOnSideConds(allAnswers, diagnosis_conditions)) {
    newRecord.probability = calculateSingleDiseaseSideProbability(
      allAnswers,
      diagnosis_conditions
    );
  } else {
    newRecord.probability = 0;
  }
  return newRecord;
}

export default function calculateDiseasesProbability(
  majorAnswers,
  minorAnswers,
  moduleCode
) {
  const allAnswers = majorAnswers.concat(minorAnswers);
  const probabilityData = [];

  getThisModuleData(moduleCode).module_data.forEach((disease) => {
    const diseaseProbability = calculateSingleDiseaseProbability(
      allAnswers,
      disease
    );
    probabilityData.push(diseaseProbability);
  });

  return probabilityData;
}
