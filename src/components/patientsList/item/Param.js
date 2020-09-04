import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "../../common/FontForgeIcon";

const Param = ({ style, icon, name, value }) => {
  return (
    <View style={[styles.container, style]}>
      <FontForgeIcon name={icon} size={32} />
      <Text>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

Param.defaultProps = {
  style: {},
};

Param.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default Param;
