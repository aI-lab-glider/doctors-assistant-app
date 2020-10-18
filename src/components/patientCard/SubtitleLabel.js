import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../common/FontForgeIcon";

const SubtitleLabel = ({ subtitle, iconName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <FontForgeIcon
        name={iconName}
        size={22}
        color={Colors.PINK}
        style={styles.leftIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
  },
  subtitle: {
    marginLeft: 35,
    marginVertical: 5,
    paddingTop: 10,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    alignSelf: "center",
  },
  leftIcon: {
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 3,
  },
});

SubtitleLabel.propTypes = {
  subtitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default SubtitleLabel;
