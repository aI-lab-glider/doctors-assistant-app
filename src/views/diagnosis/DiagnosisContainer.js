import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { Colors } from "../../constants/styles";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";

const DiagnosisContainer = ({ children, module }) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        {module && (
          <>
            <Text>{module.name}</Text>
            <Text>Podsumowanie</Text>
          </>
        )}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 16,
    justifyContent: "center",
    padding: 20,
  },
});

DiagnosisContainer.defaultProps = {
  module: null,
};

DiagnosisContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  module: modulePropTypes,
};

export default DiagnosisContainer;
