import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { Colors, Typography } from "../constants/styles";

const PatientCardScreen = ({ route, navigation }) => {
  const { patient } = route.params;

  const onButtonPressed = () => {
    navigation.navigate("PatientsList");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{patient.name}</Text>
      <Button
        onPress={() => onButtonPressed()}
        rounded
        success
        style={styles.button}
        title="test"
      >
        <Text>Move to patients list</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY,
  },
  button: {
    alignSelf: "center",
  },
  title: {
    fontSize: Typography.FONT_SIZE_32,
    alignSelf: "center",
  },
});

PatientCardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patient: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        surname: PropTypes.string,
        sex: PropTypes.string,
        phone: PropTypes.string,
        weight: PropTypes.number,
        height: PropTypes.number,
        bmi: PropTypes.number,
      }).isRequired,
    }),
  }).isRequired,
};

export default PatientCardScreen;
