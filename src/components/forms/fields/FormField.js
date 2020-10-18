import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormError from "./FormError";
import { Colors, Typography } from "../../../constants/styles";
import FontForgeIcon from "../../common/FontForgeIcon";

const FormField = ({
  name,
  leftIcon,
  keyboardType,
  placeholder,
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
            name={leftIcon}
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        )}
        <TextInput
          style={[styles.input, leftMargin()]}
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
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flexDirection: "row",
    padding: 7,
    alignSelf: "center",
    right: 20,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    width: "60%",
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.BLACK,
    borderBottomColor: Colors.PURPLE_LIGHT,
    borderBottomWidth: 2,
  },
});

FormField.defaultProps = {
  leftIcon: null,
  calculateDependentValue: null,
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  keyboardType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  calculateDependentValue: PropTypes.func,
};

export default FormField;
