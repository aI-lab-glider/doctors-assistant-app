import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormErrorMessage from "./FormErrorMessage";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../common/FontForgeIcon";

const MultiChoiceFormField = ({ name, topText, middleText, bottomText }) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [isTopChecked, setTopChecked] = useState(false);
  const [isMiddleChecked, setMiddleChecked] = useState(false);
  const [isBottomChecked, setBottomChecked] = useState(false);

  const fieldValue = `${isTopChecked ? `${topText};` : ""}${
    isMiddleChecked ? `${middleText};` : ""
  }${isBottomChecked ? `${bottomText};` : ""}`;

  const pressTop = () => {
    setTopChecked(!isTopChecked);
  };
  const pressMiddle = () => {
    setMiddleChecked(!isMiddleChecked);
  };
  const pressBottom = () => {
    setBottomChecked(!isBottomChecked);
  };

  useEffect(() => {
    setFieldValue(name, fieldValue);
  }, [fieldValue]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.choice}>
          <TouchableOpacity onPress={pressTop}>
            <FontForgeIcon
              name={isTopChecked ? "checked" : "unchecked"}
              size={38}
              color={Colors.PINK_MEDIUM}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{topText}</Text>
        </View>
        <View style={styles.choice}>
          <TouchableOpacity onPress={pressMiddle}>
            <FontForgeIcon
              name={isMiddleChecked ? "checked" : "unchecked"}
              size={38}
              color={Colors.PINK_MEDIUM}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{middleText}</Text>
        </View>
        <View style={styles.choice}>
          <TouchableOpacity onPress={pressBottom}>
            <FontForgeIcon
              name={isBottomChecked ? "checked" : "unchecked"}
              size={38}
              color={Colors.PINK_MEDIUM}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{bottomText}</Text>
        </View>
      </View>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: 12,
    marginLeft: 90,
  },
  choice: {
    flex: 1,
    flexDirection: "row",
  },
  icon: {
    flex: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.BLACK,
    alignSelf: "center",
  },
});

MultiChoiceFormField.propTypes = {
  name: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  middleText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};

export default MultiChoiceFormField;
