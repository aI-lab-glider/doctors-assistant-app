/**
 * Decide about flow going on to details question
 * @param {String} module_code
 * @param {Array} major_answers - Array with major questions answers
 * @param {Object} modules - Array with minor questions answers
 * @return {Boolean} - True if flow shoud go on details questions
 */

function goOnToDetailsQuestions(module_code, major_answers ,modules) {
  return (major_answers.reduce((a, b) => a + b, 0) >= min_major_true_answers)
}
