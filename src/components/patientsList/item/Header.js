import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import FontForgeIcon from "../../common/FontForgeIcon";

const Header = ({ style, patient }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.nameContainer}>
        <Text>{patient.name}</Text>

        <Text>{patient.surname}</Text>
      </View>
      <View style={style.codeContainer}>
        <FontForgeIcon name="patient_number" size={32} />
        <Text>aaa</Text>
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
  style: ViewPropTypes.style,
};

export default Header;
