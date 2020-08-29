import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormErrorMessage from "./FormErrorMessage";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../FontForgeIcon";

const regularIconColor = Colors.PINK_MEDIUM;
const regularInputColor = Colors.BLACK;
const BmiFormField = ({ name, leftIcon, keyboardType, placeholder }) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  const getColorStyle = (regularColor) => {
    if (values.bmi > 0 && values.bmi < 18.5)
      return {
        color: Colors.BMI_UNDERWEIGHT,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
      };
    if (values.bmi >= 25) {
      return {
        color: Colors.BMI_OVERWEIGHT,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
      };
    }
    return {
      color: regularColor,
    };
  };

  return (
    <>
      <View style={styles.container}>
        {leftIcon && (
          <FontForgeIcon
            name={leftIcon}
            size={38}
            color={getColorStyle(regularIconColor).color}
            style={styles.icon}
          />
        )}
        <TextInput
          style={[styles.input, getColorStyle(regularInputColor)]}
          placeholderTextColor={Colors.PURPLE_LIGHT}
          placeholder={placeholder}
          onChangeText={(text) => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name)}
          keyboardType={keyboardType}
        />
      </View>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flexDirection: "row",
    padding: 7,
    alignSelf: "center",
    right: 30,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    width: "55%",
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.BLACK,
    borderBottomColor: Colors.PURPLE_LIGHT,
    borderBottomWidth: 2,
  },
});

BmiFormField.defaultProps = {
  leftIcon: null,
};

BmiFormField.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  keyboardType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default BmiFormField;
