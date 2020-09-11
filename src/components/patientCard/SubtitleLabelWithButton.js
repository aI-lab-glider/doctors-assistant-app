import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../constants/styles";
import SubtitleLabel from "./SubtitleLabel";
import FontForgeIcon from "../common/FontForgeIcon";

const SubtitleLabelWithButton = ({ subtitle, iconName, onAdd }) => {
  return (
    <View style={styles.subtitleContainer}>
      <SubtitleLabel subtitle={subtitle} iconName={iconName} />
      <TouchableOpacity onPress={onAdd} style={styles.buttonAdd}>
        <FontForgeIcon name="add" size={20} color={Colors.PINK} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: { flexDirection: "row", justifyContent: "space-between" },
  buttonAdd: {
    alignSelf: "center",
    marginRight: 30,
    marginTop: 12,
  },
});

SubtitleLabelWithButton.propTypes = {
  subtitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default SubtitleLabelWithButton;
