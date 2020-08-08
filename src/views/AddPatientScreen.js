import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { Colors } from "../constants/styles";

const AddPatientScreen = ({ navigation }) => {
  const onButtonPressed = () => {
    navigation.navigate("PatientsList");
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => onButtonPressed()}
        rounded
        success
        style={styles.button}
      >
        <Text>Move to patients list</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
});

AddPatientScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddPatientScreen;
