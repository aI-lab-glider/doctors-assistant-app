import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "./FontForgeIcon";

import { Colors } from "../../constants/styles";

const Checkbox = ({ onPress, style }) => {
  const [isChecked, setChecked] = useState(false);
  const leftIcon = isChecked ? "checked" : "unchecked";

  return (
    <TouchableOpacity
      style={[styles.choice, style]}
      onPress={() => {
        onPress(!isChecked);
        setChecked(!isChecked);
      }}
    >
      <FontForgeIcon name={leftIcon} size={38} color={Colors.PINK_MEDIUM} />
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
};

Checkbox.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

export default Checkbox;
