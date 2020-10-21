import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormError from "./FormError";
import { Colors, Typography } from "../../../constants/styles";
import FontForgeIcon from "../../common/FontForgeIcon";

const Select = ({
  name,
  leftText,
  rightText,
  defaultOption,
  calculateDependentValueWhenFalse,
}) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [isChecked, setChecked] = useState(defaultOption);
  const pressLeft = () => {
    setChecked(true);
    setFieldValue(name, true);
  };
  const pressRight = () => {
    setChecked(false);
    setFieldValue(name, false);
    if (calculateDependentValueWhenFalse != null)
      calculateDependentValueWhenFalse();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={pressLeft}>
          <FontForgeIcon
            name={
              isChecked === false || isChecked == null ? "unchecked" : "checked"
            }
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{leftText}</Text>
        <TouchableOpacity onPress={pressRight}>
          <FontForgeIcon
            name={
              isChecked === true || isChecked == null ? "unchecked" : "checked"
            }
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{rightText}</Text>
      </View>
      <FormError error={errors[name]} visible={touched[name]} />
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
    marginLeft: 60,
    marginRight: 30,
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
Select.defaultProps = {
  defaultOption: null,
  calculateDependentValueWhenFalse: null,
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
  defaultOption: PropTypes.bool,
  calculateDependentValueWhenFalse: PropTypes.func,
};

export default Select;
