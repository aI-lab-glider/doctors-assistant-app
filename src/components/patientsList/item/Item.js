import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../../constants/styles";
import Header from "./Header";
import Param from "./Param";
import Patient from "../../../constants/propTypes";
import CircleButton from "../../common/CircleButton";

const Item = ({ onPress, item: patient }) => {
  return (
    <>
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Header patient={patient} />
        <Param icon="diagnosis" name="Diagnoza" value="12" />
        <Param icon="diagnosis" name="Diagnoza" value="12" />
        <Param icon="diagnosis" name="Diagnoza" value="12" />
      </TouchableOpacity>
      <CircleButton
        icon="add"
        size={32}
        onPress={() => {
          console.log("AA");
        }}
        style={styles.addButton}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.GRAY_LIGHT,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

Item.propTypes = {
  item: Patient.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Item;
