/**
* Decide about flow going on to details question
* @param {Array} major_answers - Array with major questions answers
* @param {Array} min_major_true - Array with minor questions answers
* @param {Object} diagnosis_data - Json with dianosis conditions
* @return {Object} - Json with diseases probabilities
*/

function calculateDiseasesProbability(major_answers, minor_answers, module_code, diagnosis_data) {
  var all_answers = major_answers.concat(minor_answers);
  var probability_data = [];
  console.log(getThisModuleData(diagnosis_data, module_code))

  getThisModuleData(diagnosis_data, module_code).module_data.forEach((disease) => {
    var disease_probability = calculateSingledisease_probability(all_answers, disease);
    probability_data.push(disease_probability);
  });

  return probability_data;
}

function calculateSingledisease_probability(all_answers, single_diagnosis_data) {
  var new_record = {};
  new_record.disease_icd10 = single_diagnosis_data.disease_icd10;
  new_record.disease_name = single_diagnosis_data.disease_name;

  var diagnosis_conditions = single_diagnosis_data.diagnosis_conditions
  if (goOnSideConds(all_answers, diagnosis_conditions)) {
    new_record.probability = calculateSingleDiseaseSideProbability(all_answers, diagnosis_conditions);
  }
  else {
    new_record.probability = 0;
  }
  return new_record;
}

function calculateSingleDiseaseSideProbability(all_answers, diagnosis_conditions) {
  var side_conds_numbers = 0;
  var true_side_conds_numbers = 0;

  for (cond in diagnosis_conditions) {
    if (cond.slice(0,4) == 'side' && diagnosis_conditions[cond] != 'null') {
      side_conds_numbers += 1;
      if (getCondValue(diagnosis_conditions[cond], all_answers)) {
        true_side_conds_numbers += 1;
      }
    }
  }
  return Number((true_side_conds_numbers / side_conds_numbers).toFixed(2));
}

function goOnSideConds(all_answers, diagnosis_conditions) {
  go_on = true
  for (cond in diagnosis_conditions) {
    if (cond.slice(0,4) == 'main') {
      go_on = go_on && (getCondValue(diagnosis_conditions[cond], all_answers));
    }
  }
  return go_on;
}

function getCondValue(condition, all_answers) {
  var condElements = condition.split(" ");

  var method = condElements[0].slice(0,3);
  var questions = condElements[0].slice(4,-1).split(",");
  var comparisonSign = condElements[1];
  var comparisonValue = Number(condElements[2]);

  switch (method) {
    case "PYT":
      return compareWithAnswers(questions, comparisonSign, comparisonValue, all_answers);
    default:
      return false;

  }
}

function compareWithAnswers(questions, comparisonSign, comparisonValue, all_answers) {
  var sumOfTrueAnswers = 0;
  questions.forEach((question_nr) => {
    if (all_answers[Number(question_nr) - 1] == 1) {
      sumOfTrueAnswers += 1;
    }
  });

  switch (comparisonSign) {
    case '==':
      return sumOfTrueAnswers == comparisonValue;
    case '>':
      return sumOfTrueAnswers > comparisonValue;
    case '>=':
      return sumOfTrueAnswers >= comparisonValue;
    case '<':
      return sumOfTrueAnswers < comparisonValue;
    case '<=':
      return sumOfTrueAnswers <= comparisonValue;
  }
}

function getThisModuleData(diagnosis_data, this_module_code){
  var this_module_data;
  diagnosis_data.forEach((module) => {
    if (module.module_code == this_module_code) {
      this_module_data = module;
    }
  });
  return this_module_data;
}

module.exports.calculateDiseasesProbability = calculateDiseasesProbability;
