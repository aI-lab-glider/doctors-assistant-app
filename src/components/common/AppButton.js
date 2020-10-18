import React from "react";
import { StyleSheet, TouchableOpacity, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "./FontForgeIcon";

import { Colors } from "../../constants/styles";

const AppButton = ({ onPress, icon, fontForgeIconStyle, size, buttonStyle }) => {
  return (
    <TouchableOpacity style={buttonStyle || styles.button} onPress={onPress}>
      <FontForgeIcon
        name={icon}
        size={size || 80}
        color={Colors.PURPLE}
        style={fontForgeIconStyle || styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    
  },
  icon: {
    alignSelf: "center",
    marginTop: 17,
    marginRight: 17,
  },
});

AppButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  fontForgeIconStyle: ViewPropTypes.style,
  size: PropTypes.number,
};

AppButton.defaultProps = {
  fontForgeIconStyle: null,
  size: null,
};
export default AppButton;
