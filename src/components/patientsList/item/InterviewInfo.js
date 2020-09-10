import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "../../common/FontForgeIcon";
import { Colors } from "../../../constants/styles";
import {
  FONT_REGULAR,
  FONT_SIZE_14,
} from "../../../constants/styles/typography";

const InterviewInfo = ({ style, icon, name, value }) => {
  return (
    <View style={[styles.container, style]}>
      <FontForgeIcon name={icon} size={32} color={Colors.PINK} />
      <Text style={styles.name}>{name}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_14,
    color: Colors.PURPLE,
    marginLeft: 4,
  },
  value: {
    ...FONT_REGULAR,
    color: Colors.PURPLE,
    fontSize: FONT_SIZE_14,
    marginLeft: 4,
    marginRight: 4,
    flexShrink: 1,
  },
});

InterviewInfo.defaultProps = {
  style: {},
};

InterviewInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default InterviewInfo;
