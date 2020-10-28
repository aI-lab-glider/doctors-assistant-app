import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { CodeProp } from "../../constants/propTypes/patientPropTypes";
import Criteria from "./Criteria";
import Checkbox from "../common/Checkbox";
import { Colors, Typography } from "../../constants/styles";
import cardStyles from "../../constants/styles/cardStyles";

const Result = ({ item, onPress }) => {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Text style={styles.name}>{item.disease_name}</Text>
        <Checkbox style={styles.checkbox} onPress={onPress} />
      </View>
      <View style={styles.container}>
        <Text style={styles.criteria}>Kryteria</Text>
        <Text style={styles.code}>{item.probability}</Text>
      </View>

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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.PURPLE,
    padding: 5,
    flex: 0.85,
  },
  checkbox: {
    flex: 0.15,
  },
  criteria: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.PURPLE,
    padding: 5,
  },
  code: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.PURPLE,
    paddingRight: 5,
    marginRight: 10,
  },
  item: {
    ...cardStyles.cardItem,
    marginHorizontal: 6,
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
