import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewPropTypes,
} from "react-native";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormError from "./FormError";
import { Colors, Typography } from "../../../constants/styles";
import FontForgeIcon from "../../common/FontForgeIcon";

const CheckboxForm = ({ name, text, style }) => {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [isChecked, setChecked] = useState(false);
  const leftIcon = isChecked ? "checked" : "unchecked";

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={style}
          onPress={() => {
            setFieldValue(name, !isChecked);
            setChecked(!isChecked);
          }}
        >
          <FontForgeIcon
            name={leftIcon}
            size={38}
            color={Colors.PINK_MEDIUM}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    flexDirection: "row",
    padding: 7,
    alignSelf: "center",
    right: 30,
    marginTop: 5,
  },
  icon: {
    alignSelf: "flex-start",
  },
  text: {
    width: "55%",
    fontSize: Typography.FONT_SIZE_13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.BLACK,
    borderBottomWidth: 0,
    alignSelf: "center",
  },
});

CheckboxForm.defaultProps = {
  style: { marginRight: 15 },
};

CheckboxForm.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default CheckboxForm;
