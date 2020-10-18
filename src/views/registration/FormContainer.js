import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../constants/styles";

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.backgroundContainer}>
      <ScrollView>
        <View style={styles.container}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 22,
  },
});

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContainer;
