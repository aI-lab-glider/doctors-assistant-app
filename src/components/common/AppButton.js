import React from "react";
import { StyleSheet, TouchableOpacity, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "./FontForgeIcon";

import { Colors } from "../../constants/styles";

const getOpacity = (disabled) => {
  return {
    opacity: disabled ? 0.2 : 1,
  };
};

const AppButton = ({ onPress, icon, disabled, iconStyle }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <FontForgeIcon
        name={icon}
        size={80}
        color={Colors.PURPLE}
        style={[styles.icon, getOpacity(disabled), iconStyle]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
    width: "25%",
  },
  icon: {
    alignSelf: "flex-end",
    marginTop: 17,
    marginRight: 17,
  },
});

AppButton.defaultProps = {
  disabled: false,
  iconStyle: {},
};

AppButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  iconStyle: ViewPropTypes.style,
};

export default AppButton;
