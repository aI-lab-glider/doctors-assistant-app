import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../../constants/styles";

const FormError = ({ error, visible }) => {
  const isVisibleAndHasError = error && visible;

  return isVisibleAndHasError ? (
    <Text style={styles.errorText}>{error}</Text>
  ) : null;
};

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 50,
    color: Colors.ALERT,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 5,
  },
});

FormError.defaultProps = {
  error: "",
  visible: false,
};

FormError.propTypes = {
  error: PropTypes.string,
  visible: PropTypes.bool,
};

export default FormError;
