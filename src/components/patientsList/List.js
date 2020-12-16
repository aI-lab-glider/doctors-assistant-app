import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import Item from "./item";
import Patient from "../../constants/propTypes/patientPropTypes";
import PatientBasicData from "../../constants/propTypes/basicDataPropTypes";

const List = ({ navigation, patients, patientsBasicData }) => {
  const getPatientBasicData = (id) => {
    return patientsBasicData.find(
      (dataElement) => dataElement.patient_id === id
    );
  };
  const onItemPressed = ({ patient, patientBasicData }) => {
    navigation.navigate("PatientCard", {
      patientId: patient.id,
      patientBasicDataId: patientBasicData.id,
    });
  };

  return (
    <FlatList
      data={patients}
      keyExtractor={(patient) => patient.id.toString()}
      renderItem={({ item }) => (
        <Item
          patient={item}
          patientsBasicData={getPatientBasicData(item.id)}
          onPress={() =>
            onItemPressed({
              patient: item,
              patientBasicData: getPatientBasicData(item.id),
            })
          }
        />
      )}
    />
  );
};

List.defaultProps = {
  patients: [],
  patientsBasicData: [],
};

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  patients: PropTypes.arrayOf(Patient),
  patientsBasicData: PropTypes.arrayOf(PatientBasicData),
};
export default List;
