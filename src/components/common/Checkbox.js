import React from "react";
import { StyleSheet, TouchableOpacity, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "./FontForgeIcon";

import { Colors } from "../../constants/styles";

const Checkbox = ({ isChecked, onPress, style, color, disabled }) => {
  const icon = isChecked ? "checked" : "unchecked";

  return (
    <TouchableOpacity
      style={[styles.choice, style]}
      disabled={disabled}
      onPress={() => {
        onPress(!isChecked);
      }}
    >
      <FontForgeIcon name={icon} size={38} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  choice: {
    alignItems: "center",
  },
});

Checkbox.defaultProps = {
  style: {},
  color: Colors.PINK_MEDIUM,
  disabled: false,
  isChecked: false,
  onPress: () => {},
};

Checkbox.propTypes = {
  onPress: PropTypes.func,
  isChecked: PropTypes.bool,
  style: ViewPropTypes.style,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Checkbox;
