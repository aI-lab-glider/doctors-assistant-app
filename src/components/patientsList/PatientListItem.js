import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../constants/styles";

const PatientsListItem = ({ onPress, item: patient }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{patient.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.GRAY_LIGHT,
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
  onPress: PropTypes.func.isRequired,
};

export default PatientsListItem;
