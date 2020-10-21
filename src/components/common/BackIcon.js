import * as React from "react";
import { StyleSheet, ViewPropTypes } from "react-native";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "./FontForgeIcon";

const BackIcon = ({ style }) => {
  return (
    <FontForgeIcon
      name="back"
      size={32}
      color={Colors.PURPLE_VERY_LIGHT}
      style={[styles.icon, style]}
    />
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  icon: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    transform: [{ rotate: "352deg" }],
  },
});

BackIcon.defaultProps = {
  style: {},
};

BackIcon.propTypes = {
  style: ViewPropTypes.style,
};
