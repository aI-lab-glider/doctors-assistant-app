/**
 * Decide about flow going on to details question
 * @param {Array} major_answers - Array with major questions answers
 * @param {Array} min_major_true - Array with minor questions answers
 * @return {Boolean} - True if flow shoud go on details questions
 */

function goOnToDetailsQuestions(major_answers,
                                min_major_true) {
  return (major_answers.reduce((a, b) => a + b, 0) >= min_major_true)
}
