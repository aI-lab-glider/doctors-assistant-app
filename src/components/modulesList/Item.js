import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors, Typography } from "../../constants/styles";

const ModuleItem = ({ module, onPress, conditionMet }) => {
  const iconName = conditionMet === 1 ? "check" : "close";
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{module.name}</Text>
      </TouchableOpacity>
      {conditionMet != null && (
        <>
          <AntDesign
            style={styles.icon}
            name={iconName}
            size={24}
            color={Colors.PURPLE_MEDIUM}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: { flex: 0.9 },
  text: {
    color: Colors.PURPLE,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
  },
  icon: {
    flex: 0.1,
    paddingLeft: 10,
  },
});

ModuleItem.defaultProps = {
  conditionMet: null,
};

ModuleItem.propTypes = {
  module: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  conditionMet: PropTypes.oneOf([0, 1]),
};

export default ModuleItem;
