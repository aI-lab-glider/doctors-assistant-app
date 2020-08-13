import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../constants/styles";

const FormErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: Colors.BLACK,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
});

FormErrorMessage.defaultProps = {
  error: "",
  visible: false,
};

FormErrorMessage.propTypes = {
  error: PropTypes.string,
  visible: PropTypes.bool,
};

export default FormErrorMessage;
