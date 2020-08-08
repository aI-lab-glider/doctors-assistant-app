import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { Colors } from "../constants/styles";
import PatientsList from "../components/patientsList";

const PatientsListScreen = ({ navigation }) => {
  const onButtonPressed = () => {
    navigation.navigate("AddPatient");
  };
  return (
    <View style={styles.container}>
      <PatientsList />
      <Button
        onPress={() => onButtonPressed()}
        rounded
        success
        style={styles.button}
      >
        <Text>Add new patient</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
});

PatientsListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default PatientsListScreen;
