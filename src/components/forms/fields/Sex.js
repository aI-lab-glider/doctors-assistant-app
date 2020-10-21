import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { Colors } from "../../../constants/styles";
import FontForgeIcon from "../../common/FontForgeIcon";

const Sex = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [isMenChosen, setMenChoice] = useState(true);
  const [isWomenChosen, setWomenChoice] = useState(false);

  const selectMen = () => {
    if (!isMenChosen && isWomenChosen) {
      setWomenChoice(false);
      setMenChoice(true);
      setFieldValue("sex", "male");
    }
  };
  const selectWoman = () => {
    if (!isWomenChosen && isMenChosen) {
      setWomenChoice(true);
      setMenChoice(false);
      setFieldValue("sex", "female");
    }
  };
  return (
    <View name={name} style={styles.sexChoice}>
      <TouchableOpacity style={styles.menChoice} onPress={selectMen}>
        <FontForgeIcon
          name="men_choice"
          size={40}
          color={isMenChosen ? Colors.PURPLE : Colors.PURPLE_LIGHT}
          style={styles.menIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.womenChoice} onPress={selectWoman}>
        <FontForgeIcon
          name="women_choice"
          size={40}
          color={isWomenChosen ? Colors.PURPLE : Colors.PURPLE_LIGHT}
          style={styles.womenIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  sexChoice: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 4,
    marginLeft: -60,
  },
  menChoice: {
    alignSelf: "flex-end",
  },
  womenChoice: {
    alignSelf: "flex-end",
  },
  menIcon: {
    alignSelf: "flex-start",
  },
  womenIcon: {
    alignSelf: "flex-start",
    marginLeft: 50,
  },
});

Sex.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Sex;
