import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormErrorMessage from "./FormErrorMessage";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../common/FontForgeIcon";

const SelectFormField = ({
  name,
  leftText,
  rightText,
  defaultOption,
  calculateDependentValueWhenRightChecked,
}) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [isLeftChecked, setLeftChecked] = useState(!!defaultOption);
  const [isRightChecked, setRightChecked] = useState(
    !(defaultOption || defaultOption === null)
  );

  const pressLeft = () => {
    setLeftChecked(true);
    setRightChecked(false);
    setFieldValue(name, true);
  };
  const pressRight = () => {
    setLeftChecked(false);
    setRightChecked(true);
    setFieldValue(name, false);
    if (calculateDependentValueWhenRightChecked != null)
      calculateDependentValueWhenRightChecked();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={pressLeft}>
          <FontForgeIcon
            name={isLeftChecked ? "checked" : "unchecked"}
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{leftText}</Text>
        <TouchableOpacity onPress={pressRight}>
          <FontForgeIcon
            name={isRightChecked ? "checked" : "unchecked"}
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{rightText}</Text>
      </View>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 80,
    marginRight: 60,
  },
  icon: {
    flex: 1,
    alignSelf: "flex-end",
    marginRight: 5,
  },
  text: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.BLACK,
    alignSelf: "center",
  },
});
SelectFormField.defaultProps = {
  defaultOption: null,
  calculateDependentValueWhenRightChecked: null,
};

SelectFormField.propTypes = {
  name: PropTypes.string.isRequired,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
  defaultOption: PropTypes.bool,
  calculateDependentValueWhenRightChecked: PropTypes.func,
};

export default SelectFormField;
