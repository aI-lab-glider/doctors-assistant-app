import React from "react";
import { FlatList } from "react-native";
import PatientsListItem from "./PatientListItem";
import { PatientsContext } from "../../modules/context/PatientsContext";

const PatientsList = () => {
  const { patients } = React.useContext(PatientsContext);

  return (
    <FlatList
      data={patients}
      keyExtractor={(patient) => patient.id}
      renderItem={PatientsListItem}
    />
  );
};

export default PatientsList;
