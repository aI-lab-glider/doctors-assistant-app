import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../../../constants/styles";
import Header from "./Header";
import Param from "./Param";
import Patient from "../../../constants/propTypes";

const Item = ({ onPress, item: patient }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Header patient={patient} />
      <Param icon="diagnosis" name="Diagnoza" value="12" />
      <Param icon="diagnosis" name="Diagnoza" value="12" />
      <Param icon="diagnosis" name="Diagnoza" value="12" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.GRAY_LIGHT,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: Typography.FONT_SIZE_32,
  },
});

Item.propTypes = {
  item: Patient.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Item;
