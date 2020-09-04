import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import FontForgeIcon from "../../common/FontForgeIcon";
import Patient from "../../../constants/propTypes";

const Header = ({ style, patient }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.nameContainer}>
        <Text>{patient.name}</Text>
        <Text>{patient.surname}</Text>
      </View>
      <View style={style.codeContainer}>
        <FontForgeIcon name="patient_number" size={32} />
        <Text>{patient.code}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  nameContainer: { flexDirection: "row" },
  codeContainer: { flexDirection: "row" },
});

Header.defaultProps = {
  style: {},
};

Header.propTypes = {
  patient: Patient.isRequired,
  style: ViewPropTypes.style,
};

export default Header;
