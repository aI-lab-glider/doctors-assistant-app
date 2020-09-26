/**
* Decide about flow going on to details question
* @param {Array} major_answers - Array with major questions answers
* @param {Array} min_major_true - Array with minor questions answers
* @param {Object} diagnosis_data - Json with dianosis conditions
* @return {Boolean} - True if flow shoud go on details questions
*/


function calculateDiseasesProbability(major_answers,minor_answers,diagnosis_data) {

  var all_answers = major_answers.concat(minor_answers);
  
  var probability_data = [];

  diagnosis_data.forEach((disease) => {
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
    new_record.probability = calculateSingleDiseaseSideProbability(all_answers, diagnosis_conditions)
  }
  else {
    new_record.probability = 0;
  }
  return new_record
}

function calculateSingleDiseaseSideProbability(all_answers, diagnosis_conditions) {
  var side_conds_numbers = 0;
  var true_side_conds_numbers = 0;

  for (cond in diagnosis_conditions) {
    if (cond.slice(0,4) == 'side' && diagnosis_conditions[cond] != null) {
      side_conds_numbers += 1;
      if (getCondValue(diagnosis_conditions[cond], all_answers)) {
        true_side_conds_numbers += 1;
      }
    }
  }
  return (true_side_conds_numbers / side_conds_numbers).toFixed(2);
}

function goOnSideConds(all_answers, diagnosis_conditions) {
  goOn = true
  for (cond in diagnosis_conditions) {
    if (cond.slice(0,4) == 'main') {
      goOn = goOn && (getCondValue(diagnosis_conditions[cond], all_answers));
    }
  }
  return goOn;
}

function getCondValue(condition, all_answers) {
  var condElements = condition.split(" ");

  var method = condElements[0].slice(0,3);
  var questions = condElements[0].slice(4,-1).split(",");
  var comparisonSign = condElements[1];
  var comparisonValue = condElements[2];

  switch (method) {
    case "PYT": return compareWithAnswers(questions, comparisonSign, comparisonValue, all_answers);
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
    console.log(sumOfTrueAnswers == comparisonValue)
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

test_json = [
  { disease_icd10: 'F3200',
  disease_name: 'Epizod depresji łagodny bez objawów somatycznych',
  diagnosis_conditions: {
    main_cond_1: 'PYT(1) == 1',
    main_cond_2: 'PYT(12,13,14) == 0',
    side_cond_1: 'PYT(1,3,15) > 1',
    side_cond_2: 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
    side_cond_3: null,
    side_cond_4: null,
    side_cond_5: null,
    side_cond_6: null,
    side_cond_7: 'PYT(3,5,6,7,8,9,10,11) < 4'
  }
},
{ disease_icd10: 'F3201',
disease_name: 'Epizod depresji łagodny z objawami somatycznymi',
diagnosis_conditions: {
  main_cond_1: 'PYT(1) == 1',
  main_cond_2: 'PYT(12,13,14) == 0',
  side_cond_1: 'PYT(1,3,15) > 1',
  side_cond_2: 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
  side_cond_3: null,
  side_cond_4: null,
  side_cond_5: null,
  side_cond_6: null,
  side_cond_7: 'PYT(3,5,6,7,8,9,10,11) >= 4'
}
},
{ disease_icd10: 'F3210',
disease_name: 'Epizod depresji umiarkowany bez objawów somatycznych',
diagnosis_conditions: {
  main_cond_1: 'PYT(1) == 1',
  main_cond_2: 'PYT(12,13,14) == 0',
  side_cond_1: 'PYT(1,3,15) > 1',
  side_cond_2: 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
  side_cond_3: null,
  side_cond_4: null,
  side_cond_5: null,
  side_cond_6: null,
  side_cond_7: 'PYT(3,5,6,7,8,9a,10,11) < 4'
}
},
{ disease_icd10: 'F3211',
disease_name: 'Epizod depresji umiarkowany z objawami somatycznymi',
diagnosis_conditions: {
  main_cond_1: 'PYT(1) == 1',
  main_cond_2: 'PYT(12,13,14) == 0',
  side_cond_1: 'PYT(1,3,15) > 1',
  side_cond_2: 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
  side_cond_3: null,
  side_cond_4: null,
  side_cond_5: null,
  side_cond_6: null,
  side_cond_7: 'PYT(3,5,6,7,8,9a,10,11) >= 4'
}
}
]

console.log(calculateDiseasesProbability([1,0,0,1], [0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0], test_json))
