import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from "react-native";
import { BORDER_RADIUS_SLIGHT } from "../../constants/styles/typography";
import { Colors, Typography } from "../../constants/styles";

const TextButton = ({
  onPress,
  text,
  containerStyle,
  touchableStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, touchableStyle]}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: BORDER_RADIUS_SLIGHT,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
    shadowColor: Colors.BLACK,
    shadowOpacity: 1.5,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },
  text: {
    color: Colors.PURPLE_VERY_LIGHT,
    ...Typography.FONT_BOLD,
    fontSize: Typography.FONT_SIZE_16,
  },
});
TextButton.defaultProps = {
  containerStyle: {},
  touchableStyle: {},
  textStyle: {},
};

TextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  containerStyle: ViewPropTypes.style,
  touchableStyle: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
};

export default TextButton;
