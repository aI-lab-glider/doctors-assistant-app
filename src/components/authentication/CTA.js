import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
  style: PropTypes.objectOf(PropTypes.number),
  titleStyle: PropTypes.objectOf(PropTypes.number),
  ctaStyle: PropTypes.objectOf(PropTypes.number),
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
    fontFamily: Typography.FONT_AUTH.fontFamily,
    color: Colors.AUTH_GRAY,
  },

  footerCTA: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.AUTH_VIOLET,
    fontWeight: Typography.FONT_AUTH.fontWeight,
    fontFamily: Typography.FONT_AUTH.fontFamily,
  },
});
