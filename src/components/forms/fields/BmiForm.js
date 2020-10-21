import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormError from "./FormError";
import { Colors, Typography } from "../../../constants/styles";
import * as Constants from "../../../constants/values/constants";
import FontForgeIcon from "../../common/FontForgeIcon";

const regularIconColor = Colors.PINK_MEDIUM;
const placeholderTextColor = Colors.PURPLE_LIGHT;
const regularTextColor = Colors.BLACK;
const BmiForm = ({ name, leftIcon, value }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const getIconColorStyle = () => {
    if (values.bmi > 0 && values.bmi < Constants.BMI_UNDERWEIGHT_VALUE)
      return Colors.BMI_UNDERWEIGHT;

    if (values.bmi >= Constants.BMI_OVERWEIGHT_VALUE) {
      return Colors.BMI_OVERWEIGHT;
    }
    return regularIconColor;
  };

  const getTextStyle = () => {
    if (values.bmi === "0")
      return {
        color: placeholderTextColor,
      };
    if (values.bmi > 0 && values.bmi < Constants.BMI_UNDERWEIGHT_VALUE)
      return {
        color: Colors.BMI_UNDERWEIGHT,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
      };
    if (values.bmi >= Constants.BMI_OVERWEIGHT_VALUE) {
      return {
        color: Colors.BMI_OVERWEIGHT,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
      };
    }
    return {
      color: regularTextColor,
    };
  };

  return (
    <>
      <View style={styles.container}>
        {leftIcon && (
          <FontForgeIcon
            name={leftIcon}
            size={38}
            color={getIconColorStyle()}
            style={styles.icon}
          />
        )}
        <Text
          style={[styles.input, getTextStyle()]}
          onChangeText={(text) => setFieldValue(name, text)}
        >
          {value}
        </Text>
      </View>
      <FormError error={errors[name]} visible={touched[name]} />
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
    padding: 12,
    left: -12,
  },
});

BmiForm.defaultProps = {
  leftIcon: null,
};

BmiForm.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default BmiForm;
