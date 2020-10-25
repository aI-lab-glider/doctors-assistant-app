import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Typography } from "../../constants/styles";
import Checkbox from "../common/Checkbox";

const ModuleItem = ({ module }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log("ASDas");
      }}
    >
      <Text style={styles.text}>{module.name}</Text>
      <Checkbox
        onPress={() => {
          console.log("asdasd");
        }}
      />
    </TouchableOpacity>
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
  text: {
    color: Colors.PURPLE,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_20,
  },
});

ModuleItem.propTypes = {
  module: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModuleItem;
