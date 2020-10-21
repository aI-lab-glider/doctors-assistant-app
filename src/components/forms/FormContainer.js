import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
} from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../constants/styles";

const FormContainer = ({ title, children, style }) => {
  return (
    <KeyboardAvoidingView style={styles.backgroundContainer}>
      <ScrollView style={[styles.container, style]}>
        <View style={[styles.container, style]}>
          {title && <Text style={styles.titleText}>{title}</Text>}
          {children}
        </View>
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
    paddingBottom: 22,
  },
  titleText: {
    marginLeft: 30,
    marginBottom: 20,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

FormContainer.defaultProps = {
  title: null,
  style: {},
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  style: ViewPropTypes.style,
};

export default FormContainer;
