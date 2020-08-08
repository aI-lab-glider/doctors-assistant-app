import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { Colors } from "../constants/styles";
import { PatientsContext } from "../modules/context/PatientsContext";

const AddPatientScreen = ({ navigation }) => {
  // ID = key (PatientContextReducer) => first press - add Tabaluga, second press - edit his name
  const patient = {
    id: 7,
    name: "Tabaluga",
    surname: "Smok",
    sex: "male",
    phone: "2342342342",
    weight: 44,
    height: 142,
    bmi: 4,
  };

  const { setPatient } = React.useContext(PatientsContext);

  const [newName, onNameChange] = React.useState(patient.name);

  const onButtonPressed = () => {
    patient.name = newName;
    setPatient(patient);
    navigation.navigate("PatientsList");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.nameInput}
        onChangeText={(text) => onNameChange(text)}
        value={newName}
      />
      <Button
        onPress={() => onButtonPressed()}
        rounded
        success
        style={styles.button}
      >
        <Text>Add Tabaluga or change his name</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_MEDIUM,
  },
  button: {
    alignSelf: "center",
  },
  nameInput: {
    alignSelf: "center",
    height: 50,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
  },
});

AddPatientScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddPatientScreen;
