import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormErrorMessage from "./FormErrorMessage";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../FontForgeIcon";

const FormField = ({ name, leftIcon, keyboardType, placeholder }) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        {leftIcon && (
          <FontForgeIcon
            name={leftIcon}
            size={30}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    padding: 7,
  },
  icon: {
    marginRight: 15,
    position: "absolute",
    left: 50,
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

FormField.defaultProps = {
  leftIcon: null,
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  keyboardType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormField;
