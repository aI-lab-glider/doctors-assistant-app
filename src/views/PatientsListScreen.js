import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../constants/styles";
import List from "../components/patientsList";

const PatientsListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <List navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    justifyContent: "center",
  },
});

PatientsListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default PatientsListScreen;
