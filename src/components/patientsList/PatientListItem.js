import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const PatientsListItem = ({ item: patient }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{patient.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

PatientsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    sex: PropTypes.string,
    phone: PropTypes.string,
    weight: PropTypes.number,
    height: PropTypes.number,
    bmi: PropTypes.number,
  }).isRequired,
};

export default PatientsListItem;
