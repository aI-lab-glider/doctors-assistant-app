import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewPropTypes,
} from "react-native";
import PropTypes from "prop-types";
import { Typography, Colors } from "../../constants/styles";

export default function CTA({
  title,
  ctaText,
  onPress,
  style,
  titleStyle,
  ctaStyle,
}) {
  return (
    <View style={[styles.footer, style]}>
      {title && (
        <Text
          style={[styles.footerText, titleStyle, ctaText && { marginRight: 5 }]}
        >
          {title}
        </Text>
      )}

      {ctaText && (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.footerCTA, ctaStyle]}>{ctaText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

CTA.propTypes = {
  title: PropTypes.string,
  ctaText: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  titleStyle: ViewPropTypes.style,
  ctaStyle: Text.propTypes.style,
};

CTA.defaultProps = {
  title: null,
  ctaText: null,
  onPress: {},
  style: {},
  titleStyle: {},
  ctaStyle: {},
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.AUTH_GRAY,
  },

  footerCTA: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.PURPLE,
    fontWeight: Typography.FONT_WEIGHT_LIGHT,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});
