import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { Colors } from "../constants/styles";

const PatientCardScreen = ({ navigation }) => {
  const onButtonPressed = () => {
    navigation.navigate("AddPatient");
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => onButtonPressed()}
        rounded
        success
        style={styles.button}
        title="test"
      >
        <Text>Move to add patient screen</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
  },
});

PatientCardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PatientCardScreen;
