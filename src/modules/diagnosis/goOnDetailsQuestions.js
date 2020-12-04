/**
 * Decide about flow going on to details question
 * @param {String} module_code
 * @param {Array} major_answers - Array with major questions answers
 * @return {Boolean} - True if flow should go on details questions
 */

const getThisModule = (thisModuleCode, modulesData) => {
  return modulesData.find((module) => module.code === thisModuleCode);
};

const goOnDetailsQuestions = (thisModuleCode, modulesData, majorAnswers) => {
  const minMajorTrueAnswers = getThisModule(thisModuleCode, modulesData)
    .min_major_true;
  return majorAnswers.reduce((a, b) => a + b, 0) >= minMajorTrueAnswers;
};

export default goOnDetailsQuestions;
