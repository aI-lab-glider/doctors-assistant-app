import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormErrorMessage from "./FormErrorMessage";
import { Colors } from "../../constants/styles";

const FormField = ({ name, keyboardType }) => {
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
    fontSize: 18,
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
  keyboardType: PropTypes.string.isRequired,
};

export default FormField;
