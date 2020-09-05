import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../../constants/styles";
import Header from "./Header";
import Param from "./Param";
import Patient from "../../../constants/propTypes";
import CircleButton from "../../common/CircleButton";
import {
  BORDER_RADIUS,
  BOX_SHADOW,
} from "../../../constants/styles/typography";

const Item = ({ onPress, item: patient }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
        <Header patient={patient} />
        <Param
          icon="diagnosis"
          name="Diagnoza"
          value={patient.diagnosis.join(", ")}
        />
        <Param
          icon="medicines"
          name="Leki"
          value={patient.medicines.join(", ")}
        />
        <Param
          icon="hospital"
          name="Liczba hospitalizacji"
          value={patient.hospitalizations.toString()}
        />
      </TouchableOpacity>
      <CircleButton
        icon="add"
        size={32}
        onPress={() => {
          console.log("AA");
        }}
        style={styles.addButton}
        color={Colors.GREEN_MEDIUM}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: BORDER_RADIUS,
    ...BOX_SHADOW,
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
