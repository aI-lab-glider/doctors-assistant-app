/**
 * Decide about flow going on to details question
 * @param {String} module_code
 * @param {Array} major_answers - Array with major questions answers
 * @return {Boolean} - True if flow should go on details questions
 */

import * as modulesData from "../../assets/diagnosis_data/modules_data.json";

function getThisModule(thisModuleCode) {
  let thisModule;
  modulesData.default.forEach((module) => {
    if (module.module_code === thisModuleCode) {
      thisModule = module;
    }
  });
  return thisModule;
}

export default function goOnDetailsQuestions(thisModuleCode, majorAnswers) {
  const minMajorTrueAnswers = getThisModule(thisModuleCode).min_major_true;
  return majorAnswers.reduce((a, b) => a + b, 0) >= minMajorTrueAnswers;
}
