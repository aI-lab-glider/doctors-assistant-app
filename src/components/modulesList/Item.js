import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Typography } from "../../constants/styles";
import Checkbox from "../common/Checkbox";

const ModuleItem = ({ module, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{module.name}</Text>
      </TouchableOpacity>
      <Checkbox disabled />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: { flex: 1 },
  text: {
    color: Colors.PURPLE,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
  },
});

ModuleItem.propTypes = {
  module: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ModuleItem;
