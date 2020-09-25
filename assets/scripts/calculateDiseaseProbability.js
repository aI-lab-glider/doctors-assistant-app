/**
 * Decide about flow going on to details question
 * @param {Array} major_answers - Array with major questions answers
 * @param {Array} min_major_true - Array with minor questions answers
 * @param {Object} diagnosis_data - Json with dianosis conditions
 * @return {Boolean} - True if flow shoud go on details questions
 */

function calculataDiseasesProbability(major_answers,
                                      minor_answers,
                                      diagnosis_data) {

   var all_answers = major_answers.concat(minor_answers);

   var probability_data = []

   for (var i = 0, len = diagnosis_data.length; i < len; i++){
     calculateSingleDiseaseProbability(all_answers, diagnosis_data[i])
   }

   return probability_data;

}

function calculateSingleDiseaseProbability(all_answers, signgle_diagnosis_data) {

}

function createEmptyProbabilityObj(diagnosis_data) {
  var probability_data = []

  for (var i = 0, len = diagnosis_data.length; i < len; i++){
    var new_record = {};
    new_record.code = diagnosis_data[i].code;
    new_record.probability = 0;
    probability_data.push(new_record);
  }

  return probability_data;
}

test_json = [
  { code: 'F3200',
    diagnosis_conditions: {
            'main_cond_1': 'PYT(1) == 1',
            'main_cond_2': 'PYT(12,13,14) == 0',
            'side_cond_1': 'PYT(1,3,15) > 1',
            'side_cond_2': 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
            'side_cond_3': null,
            'side_cond_4': null,
            'side_cond_5': null,
            'side_cond_6': null,
            'side_cond_7': 'PYT(3,5,6,7,8,9a,10,11) < 4'
            }
    },
    { code: 'F3201',
      diagnosis_conditions: {
              'main_cond_1': 'PYT(1) == 1',
              'main_cond_2': 'PYT(12,13,14) == 0',
              'side_cond_1': 'PYT(1,3,15) > 1',
              'side_cond_2': 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
              'side_cond_3': null,
              'side_cond_4': null,
              'side_cond_5': null,
              'side_cond_6': null,
              'side_cond_7': 'PYT(3,5,6,7,8,9a,10,11) >= 4'
              }
      },
      { code: 'F3210',
        diagnosis_conditions: {
                'main_cond_1': 'PYT(1) == 1',
                'main_cond_2': 'PYT(12,13,14) == 0',
                'side_cond_1': 'PYT(1,3,15) > 1',
                'side_cond_2': 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
                'side_cond_3': null,
                'side_cond_4': null,
                'side_cond_5': null,
                'side_cond_6': null,
                'side_cond_7': 'PYT(3,5,6,7,8,9a,10,11) < 4'
                }
        },
        { code: 'F3211',
          diagnosis_conditions: {
                  'main_cond_1': 'PYT(1) == 1',
                  'main_cond_2': 'PYT(12,13,14) == 0',
                  'side_cond_1': 'PYT(1,3,15) > 1',
                  'side_cond_2': 'PYT(1,3,8,9,15,16,17,18,19,20) > 3',
                  'side_cond_3': null,
                  'side_cond_4': null,
                  'side_cond_5': null,
                  'side_cond_6': null,
                  'side_cond_7': 'PYT(3,5,6,7,8,9a,10,11) >= 4'
                  }
          }
]

console.log(calculataDiseasesProbability([0,0,1], [1,1,0], test_json))
