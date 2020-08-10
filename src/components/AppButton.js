import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { Colors } from "../constants/styles";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors.PRIMARY }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AppButton;
