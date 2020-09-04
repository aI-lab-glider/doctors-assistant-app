import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { PatientsContext } from "../../modules/context/PatientsContext";
import Item from "./item";

const List = ({ navigation }) => {
  const { patients } = React.useContext(PatientsContext);

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

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default List;
