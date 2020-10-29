import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../constants/styles";

const Criteria = ({ name, allAnswersNumber, validAnswersNumber }) => {
  const areAllAnswersValid = allAnswersNumber === validAnswersNumber;
  const color = areAllAnswersValid ? Colors.GREEN : Colors.RED;
  return (
    <View style={styles.container}>
      <Text style={[styles.name, { color }]}>
        {"> "}
        {name}
      </Text>
      <Text style={[styles.conditions, { color }]}>
        spełnione warunki {validAnswersNumber}/{allAnswersNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    marginLeft: 20,
  },
  name: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  conditions: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginRight: 10,
  },
});

Criteria.propTypes = {
  name: PropTypes.string.isRequired,
  allAnswersNumber: PropTypes.number.isRequired,
  validAnswersNumber: PropTypes.number.isRequired,
};
export default Criteria;
