import React from "react";
import { StyleSheet, TouchableOpacity, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "./FontForgeIcon";

import { Colors } from "../../constants/styles";

const CircleButton = ({ style, onPress, icon, size, color }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <FontForgeIcon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

CircleButton.defaultProps = {
  style: {},
  color: Colors.PINK_MEDIUM,
};

CircleButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  style: ViewPropTypes.style,
  color: PropTypes.string,
};

export default CircleButton;
