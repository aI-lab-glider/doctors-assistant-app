import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { CodeProp } from "../../constants/propTypes/patientPropTypes";
import Criteria from "./Criteria";
import Checkbox from "../common/Checkbox";
import { Colors, Typography } from "../../constants/styles";

const Result = ({ item, onPress }) => {
  return (
    <View>
      <Text style={styles.name}>{item.disease_name}</Text>
      <View style={styles.container}>
        <Text style={styles.code}>ICD 10: {item.disease_icd10}</Text>
        <Text style={styles.code}>Prawdopodobieństwo: {item.probability}%</Text>
        <Checkbox onPress={onPress} />
      </View>
      <Text style={styles.name}>Kryteria</Text>
      <Criteria
        name="ogólne"
        allAnswersNumber={item.conditionsAcc.main.allAnswers}
        validAnswersNumber={item.conditionsAcc.main.validAnswers}
      />
      <Criteria
        name="dodatkowe"
        allAnswersNumber={item.conditionsAcc.side.allAnswers}
        validAnswersNumber={item.conditionsAcc.side.validAnswers}
      />
      <Criteria
        name="uszczegóławiające"
        allAnswersNumber={item.conditionsAcc.detail.allAnswers}
        validAnswersNumber={item.conditionsAcc.detail.validAnswers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.PURPLE,
  },
});

Result.propTypes = {
  item: PropTypes.shape({
    disease_icd10: CodeProp.isRequired,
    disease_name: PropTypes.string.isRequired,
    probability: PropTypes.number.isRequired,
    conditionsAcc: PropTypes.shape({
      main: PropTypes.shape({
        allAnswers: PropTypes.number,
        validAnswers: PropTypes.number,
      }),
      side: PropTypes.shape({
        allAnswers: PropTypes.number,
        validAnswers: PropTypes.number,
      }),
      detail: PropTypes.shape({
        allAnswers: PropTypes.number,
        validAnswers: PropTypes.number,
      }),
    }),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Result;
