import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import Item from "./item";
import Patient from "../../constants/propTypes";

const List = ({ navigation, patients }) => {
  const onItemPressed = ({ patient }) => {
    navigation.navigate("PatientCard", { patient });
  };
  return (
    <FlatList
      data={patients}
      keyExtractor={(patient) => patient.id.toString()}
      renderItem={({ item }) => (
        <Item item={item} onPress={() => onItemPressed({ patient: item })} />
      )}
    />
  );
};

List.defaultProps = {
  patients: [],
};

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  patients: PropTypes.arrayOf(Patient),
};
export default List;
