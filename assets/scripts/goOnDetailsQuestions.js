/**
 * Decide about flow going on to details question
 * @param {String} module_code
 * @param {Array} major_answers - Array with major questions answers
 * @param {Object} modules - Array with minor questions answers
 * @return {Boolean} - True if flow shoud go on details questions
 */

function goOnDetailsQuestions(this_module_code, major_answers, modules, modules_data) {
  var min_major_true_answers = getThisModule(modules_data, this_module_code).min_major_true;
  return (major_answers.reduce((a, b) => a + b, 0) >= min_major_true_answers);
}

function getThisModule(modules_data, this_module_code){
  var this_module;
  modules_data.forEach((module) => {
    if (module.module_code == this_module_code) {
      this_module = module;
    }
  });
  return this_module;
}

module.exports.goOnDetailsQuestions = goOnDetailsQuestions;
