import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { Colors } from "../constants/styles";
import PatientsList from "../components/patientsList";
import { useAuth } from "../modules/context/Auth";

const PatientsListScreen = ({ navigation }) => {
  const onButtonPressed = () => {
    navigation.navigate("AddPatient");
  };
  const { state } = useAuth();
  const { user } = state;
  return (
    <View style={styles.container}>
      <Text>{`Welcome ${user.firstName} ${user.lastName} `}</Text>
      <PatientsList navigation={navigation} />
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
