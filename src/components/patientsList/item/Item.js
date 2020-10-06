import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../../constants/styles";
import Header from "./Header";
import InterviewInfo from "./InterviewInfo";
import Patient from "../../../constants/propTypes/patientPropTypes";
import CircleButton from "../../common/CircleButton";
import {
  BORDER_RADIUS,
  BOX_SHADOW,
} from "../../../constants/styles/typography";
import PatientBasicData from "../../../constants/propTypes/basicDataPropTypes";

const Item = ({ onPress, patient, patientsBasicData }) => {
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
          value={
            patientsBasicData.medications ? patientsBasicData.medications : ""
          }
        />
        <InterviewInfo
          icon="hospital"
          name="Liczba hospitalizacji"
          value={
            patientsBasicData.hospitalization_times
              ? `${patientsBasicData.hospitalization_times}`
              : ""
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
    padding: 6,
    marginVertical: 6,
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

Item.defaultProps = {
  patientsBasicData: {
    medications: "",
    hospitalization_times: 0,
  },
};

Item.propTypes = {
  patient: Patient.isRequired,
  patientsBasicData: PatientBasicData,
  onPress: PropTypes.func.isRequired,
};

export default Item;
