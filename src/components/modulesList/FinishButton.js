import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS } from "../../constants/styles/typography";
import { Colors, Typography } from "../../constants/styles";

const FinishButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Zakończ diagnozę</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: BORDER_RADIUS,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: Colors.PURPLE_VERY_LIGHT,
    ...Typography.FONT_BOLD,
    fontSize: Typography.FONT_SIZE_16,
  },
});

FinishButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FinishButton;
