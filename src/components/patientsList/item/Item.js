import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../../constants/styles";
import Header from "./Header";
import InterviewInfo from "./InterviewInfo";
import Patient from "../../../constants/propTypes/patientPropTypes";
import CircleButton from "../../common/CircleButton";
import PatientBasicData from "../../../constants/propTypes/basicDataPropTypes";
import cardStyles from "../../../constants/styles/cardStyles";

const Item = ({ onPress, patient, patientsBasicData }) => {
  const mapDiagnosisToString = (diagnosis) => {
    return diagnosis
      .map((diagnose) => {
        return diagnose.disease_name;
      })
      .join(", ");
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
        <Header patient={patient} />
        <InterviewInfo
          icon="diagnosis"
          name="Diagnoza"
          value={
            patient.diagnosis ? mapDiagnosisToString(patient.diagnosis) : ""
          }
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
    ...cardStyles.cardItem,
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
