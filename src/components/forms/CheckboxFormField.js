import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormErrorMessage from "./FormErrorMessage";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../common/FontForgeIcon";

const CheckboxFormField = ({ name, text, marginLeft }) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [isChecked, setChecked] = useState(false);
  const leftIcon = isChecked ? "checked" : "unchecked";

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.choice, { marginLeft }]}
          onPress={() => {
            setFieldValue(name, !isChecked);
            setChecked(!isChecked);
          }}
        >
          <FontForgeIcon
            name={leftIcon}
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
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
    marginTop: 5,
  },
  choice: {
    marginRight: 15,
  },
  icon: {
    alignSelf: "flex-start",
  },
  text: {
    width: "55%",
    fontSize: Typography.FONT_SIZE_13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.BLACK,
    borderBottomWidth: 0,
    alignSelf: "center",
  },
});

CheckboxFormField.defaultProps = {
  marginLeft: 0,
};

CheckboxFormField.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.number,
};

export default CheckboxFormField;
