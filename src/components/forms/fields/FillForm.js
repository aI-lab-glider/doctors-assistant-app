import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormError from "./FormError";
import { Colors, Typography } from "../../../constants/styles";
import FontForgeIcon from "../../common/FontForgeIcon";

const FillForm = ({
  name,
  leftIcon,
  keyboardType,
  placeholder,
  labelText,
  calculateDependentValue,
  ...otherProps
}) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
  } = useFormikContext();

  const leftMargin = () => {
    return {
      marginLeft: leftIcon ? 0 : 52,
    };
  };

  return (
    <>
      <View style={styles.container}>
        {leftIcon && (
          <FontForgeIcon
            name="name"
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        )}
        <Text style={[styles.labelText, leftMargin()]}>{labelText}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.PURPLE_LIGHT}
          placeholder={placeholder}
          onChangeText={(text) => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name)}
          keyboardType={keyboardType}
          calculateDependentValue={calculateDependentValue}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      </View>
      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flexDirection: "row",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    right: 20,
  },
  icon: {
    marginRight: 15,
  },
  labelText: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.BLACK,
    marginRight: 20,
  },
  input: {
    width: "16%",
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.BLACK,
    borderBottomColor: Colors.PURPLE_LIGHT,
    borderBottomWidth: 2,
  },
});

FillForm.defaultProps = {
  leftIcon: null,
  calculateDependentValue: null,
};

FillForm.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  keyboardType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  calculateDependentValue: PropTypes.func,
};

export default FillForm;
