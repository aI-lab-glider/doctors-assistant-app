import React from "react";
import { StyleSheet, View, Text, ViewPropTypes } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../common/FontForgeIcon";

const ButtonWithLabel = ({ style, onPress, size, color, icon, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={styles.menuIcon}>
        <FontForgeIcon
          name={icon}
          size={size}
          color={color}
          style={styles.instaIcon}
        />
        <Text style={[styles.instaText, { color }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  menuIcon: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  instaIcon: {
    alignSelf: "center",
  },
  instaText: {
    color: Colors.PINK,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "center",
    paddingTop: 5,
  },
});

ButtonWithLabel.defaultProps = {
  style: {},
  color: Colors.PINK,
};

ButtonWithLabel.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ButtonWithLabel;
