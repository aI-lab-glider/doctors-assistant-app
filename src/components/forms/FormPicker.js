import React from "react";
import { View, StyleSheet, Picker } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { Fontisto } from "@expo/vector-icons";
import FormErrorMessage from "./FormErrorMessage";
import { Colors } from "../../constants/styles";

const FormPicker = ({
  name,
  selectedValue,
  onValueChange,
  mode,
  leftIcon,
  children,
}) => {
  const { errors, touched } = useFormikContext();

  return (
    <>
      <View style={[styles.container]}>
        <Fontisto
          name={leftIcon}
          size={20}
          color={Colors.BLACK}
          style={styles.icon}
        />
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          mode={mode}
        >
          {children}
        </Picker>
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

FormPicker.propTypes = {
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  leftIcon: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      label: "",
      value: "",
    })
  ).isRequired,
};

export default FormPicker;
