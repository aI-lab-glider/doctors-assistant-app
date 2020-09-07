import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../../constants/styles";
import Header from "./Header";
import InterviewInfo from "./InterviewInfo";
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
        <InterviewInfo
          icon="diagnosis"
          name="Diagnoza"
          value={patient.diagnosis ? patient.diagnosis.join(", ") : ""}
        />
        <InterviewInfo
          icon="medicines"
          name="Leki"
          value={patient.medicines ? patient.medicines.join(", ") : ""}
        />
        <InterviewInfo
          icon="hospital"
          name="Liczba hospitalizacji"
          value={
            patient.hospitalization_times
              ? patient.hospitalization_times.toString()
              : "0"
          }
        />
      </TouchableOpacity>
      <CircleButton
        icon="add"
        size={32}
        onPress={() => {}}
        style={styles.addButton}
        color={Colors.GREEN}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
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
