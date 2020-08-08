import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { Colors } from "../constants/styles";

const PatientsListScreen = ({ navigation }) => {
  const onButtonPressed = () => {
    navigation.navigate("PatientCard");
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => onButtonPressed()}
        rounded
        success
        style={styles.button}
      >
        <Text>Move to patient card</Text>
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
