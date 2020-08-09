import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import PatientsListItem from "./PatientListItem";
import { PatientsContext } from "../../modules/context/PatientsContext";

const PatientsList = ({ navigation }) => {
  const { patients } = React.useContext(PatientsContext);

  const onItemPressed = ({ patient }) => {
    navigation.navigate("PatientCard", { patient });
  };

  return (
    <FlatList
      data={patients}
      keyExtractor={(patient) => patient.id.toString()}
      renderItem={({ item }) => (
        <PatientsListItem
          item={item}
          onPress={() => onItemPressed({ patient: item })}
        />
      )}
    />
  );
};

PatientsList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default PatientsList;
