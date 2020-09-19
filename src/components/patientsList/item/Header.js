import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import FontForgeIcon from "../../common/FontForgeIcon";
import Patient from "../../../constants/propTypes/patientPropTypes";
import { Colors } from "../../../constants/styles";
import {
  FONT_REGULAR,
  FONT_BOLD,
  FONT_SIZE_16,
} from "../../../constants/styles/typography";

const Header = ({ style, patient }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.surname}>
        {patient.surname}
        <Text style={styles.name}> {patient.name}</Text>
      </Text>
      <View style={styles.codeContainer}>
        <FontForgeIcon
          name="patient_number"
          size={32}
          color={Colors.PINK_MEDIUM}
        />
        <Text style={styles.code}>{patient.id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
  },
  codeContainer: { flexDirection: "row", alignItems: "center" },
  surname: {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_16,
    color: Colors.PURPLE,
    flexShrink: 0.5,
  },
  name: {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_16,
    color: Colors.PURPLE,
    alignSelf: "center",
  },
  code: {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_16,
    color: Colors.PINK,
    alignSelf: "center",
    marginLeft: 8,
  },
});

Header.defaultProps = {
  style: {},
};

Header.propTypes = {
  patient: Patient.isRequired,
  style: ViewPropTypes.style,
};

export default Header;
