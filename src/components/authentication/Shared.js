import React from "react";
import { View, Text, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 25,
    color: "#362068",
    fontWeight: "400",
    fontFamily: "Roboto",
  },

  errorText: {
    marginBottom: 8,
    color: "red",
  },
});
