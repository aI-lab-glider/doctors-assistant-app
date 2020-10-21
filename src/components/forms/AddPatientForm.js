import { Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

import Sex from "./fields/Sex";
import Pesel from "./fields/Pesel";

import Weight from "./fields/Weight";
import BmiForm from "./fields/BmiForm";
import FormField from "./fields/FormField";
import {
  calculateBmiValue,
  calculateDateOfBirthValue,
} from "../../modules/utils/Calculators";
import formStyles from "../../constants/styles/formStyles";
import * as Typography from "../../constants/styles/typography";

const AddPatientForm = ({ handleChange, handleBlur, values }) => {
  return (
    <>
      <FormField
        name="name"
        leftIcon="person"
        onChangeText={handleChange("name")}
        placeholder="Imię"
        onBlur={handleBlur("name")}
        keyboardType="default"
        autoFocus
      />
      <FormField
        name="surname"
        onChangeText={handleChange("surname")}
        placeholder="Nazwisko"
        onBlur={handleBlur("surname")}
        keyboardType="default"
      />
      <Sex name="sex" />
      <FormField
        name="code"
        onChangeText={handleChange("code")}
        placeholder="Kod rozpoznania"
        onBlur={handleBlur("code")}
        keyboardType="default"
      />
      <Pesel
        name="pesel"
        onChangeText={handleChange("pesel")}
        placeholder="Pesel"
        onBlur={handleBlur("pesel")}
        keyboardType="numeric"
        calculateDependentValue={calculateDateOfBirthValue}
      />
      <FormField
        name="date_of_birth"
        onChangeText={handleChange("date_of_birth")}
        placeholder={
          values.date_of_birth ? values.date_of_birth : "Dzień miesiąc rok"
        }
        onBlur={handleBlur("date_of_birth")}
        keyboardType="phone-pad"
        value={values.date_of_birth || calculateDateOfBirthValue(values.pesel)}
        editable
      />
      <FormField
        name="height"
        leftIcon="height"
        onChangeText={handleChange("height")}
        placeholder="Wzrost"
        onBlur={handleBlur("height")}
        keyboardType="numeric"
      />
      <Weight
        name="weight"
        leftIcon="weight"
        onChangeText={handleChange("weight")}
        placeholder="Waga"
        onBlur={handleBlur("weight")}
        keyboardType="numeric"
        calculateDependentValue={calculateBmiValue}
      />
      <BmiForm
        name="bmi"
        leftIcon="bmi"
        onChangeText={handleChange("bmi")}
        value={
          calculateBmiValue(values.height, values.weight) === "0"
            ? "BMI"
            : `${values.bmi}`
        }
      />
      <Text style={styles.subtitleText}>Notatka</Text>
      <FormField
        name="note"
        leftIcon="pen"
        onChangeText={handleChange("note")}
        placeholder="Miejsce na notatkę"
        onBlur={handleBlur("note")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.subtitleText}>Dane kontaktowe</Text>
      <FormField
        name="phone"
        leftIcon="phone"
        onChangeText={handleChange("phone")}
        placeholder=""
        onBlur={handleBlur("phone")}
        keyboardType="numeric"
      />
      <Text style={styles.subtitleText}>Dane osoby upoważnionej</Text>
      <FormField
        name="person_guard"
        leftIcon="person"
        onChangeText={handleChange("person_guard")}
        placeholder="Imię i Nazwisko"
        onBlur={handleBlur("person_guard")}
        keyboardType="default"
      />
      <FormField
        name="phone_guard"
        leftIcon="phone"
        onChangeText={handleChange("phone_guard")}
        placeholder=""
        onBlur={handleBlur("phone_guard")}
        keyboardType="numeric"
      />
    </>
  );
};

const styles = {
  ...formStyles,
  subtitleText: {
    ...formStyles.subtitleText,
    paddingTop: 10,
    fontSize: Typography.FONT_SIZE_13,
  },
};

AddPatientForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    date_of_birth: PropTypes.string.isRequired,
    bmi: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pesel: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired, // Patient with all values as text
};
export default AddPatientForm;
