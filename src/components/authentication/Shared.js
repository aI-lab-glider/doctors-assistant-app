import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Typography, Colors } from "../../constants/styles";

// HEADER COMPONENT
export const Header = (props) => {
  const { title, style } = props;

  return (
    <View style={[styles.header, style]}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "",
  style: {},
};

// ERROR COMPONENT
export const ErrorText = ({ error }) => {
  return <Text style={styles.errorText}>{error}</Text>;
};

ErrorText.defaultProps = {
  error: "",
};

ErrorText.propTypes = {
  error: PropTypes.string,
};

Header.propTypes = {
  title: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.number),
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
  },

  headerText: {
    fontSize: Typography.FONT_SIZE_25,
    color: Colors.AUTH_VIOLET_Dark,
    fontWeight: Typography.FONT_AUTH.fontWeight,
    fontFamily: Typography.FONT_AUTH.fontFamily,
  },

  errorText: {
    marginBottom: 8,
    color: "red",
  },
});
