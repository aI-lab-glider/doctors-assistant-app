import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FormErrorMessage from "./FormErrorMessage";
import { Colors, Typography } from "../../constants/styles";

const FormField = ({ name, leftIcon, keyboardType }) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <View style={[styles.container]}>
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={Colors.BLACK}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.GRAY_MEDIUM}
          value={String(values[name])}
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
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: "100%",
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.BLACK,
  },
  rightIconStyles: {
    position: "absolute",
    right: 30,
    alignSelf: "center",
  },
});

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string.isRequired,
  keyboardType: PropTypes.string.isRequired,
};

export default FormField;
