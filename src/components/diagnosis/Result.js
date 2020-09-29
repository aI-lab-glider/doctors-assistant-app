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
      <Criteria name="ogólne" allAnswersNumber={2} validAnswersNumber={2} />
      <Criteria name="dodatkowe" allAnswersNumber={2} validAnswersNumber={2} />
      <Criteria
        name="uszczegóławiające"
        allAnswersNumber={2}
        validAnswersNumber={1}
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
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Result;
