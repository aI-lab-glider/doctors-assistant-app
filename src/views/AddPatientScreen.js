import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import dateFormat from "dateformat";
import { Colors, Typography } from "../constants/styles";
import { PatientsContext } from "../modules/context/PatientsContext";
import FormField from "../components/forms/FormField";
import SexFormField from "../components/forms/SexFormField";
import PeselFormField from "../components/forms/PeselFormField";
import WeightFormField from "../components/forms/WeightFormField";
import BmiFormField from "../components/forms/BmiFormField";
import CheckboxFormField from "../components/forms/CheckboxFormField";
import AppButton from "../components/AppButton";
// import FontForgeIcon from "../components/FontForgeIcon";
import validationSchema from "../components/forms/validationSchema";

const AddPatientScreen = ({ navigation }) => {
  // ID = key (PatientContextReducer) => first press - add Tabaluga, second press - edit his name
  const patient = {
    id: 7,
    name: "",
    surname: "",
    sex: "male",
    code: "",
    pesel: "",
    date_of_birth: "",
    weight: 0,
    height: 0,
    bmi: 0,
    note: "",
    phone: "",
    person_authorized: "",
    phone_authorized: "",
    guardianship: false,
  };

  const { setPatient } = useContext(PatientsContext);
  const [isChecked, setChecked] = useState(false);

  const onButtonPressed = (values) => {
    patient.name = values.name;
    patient.surname = values.surname;
    patient.sex = values.sex;
    patient.code = values.code;
    patient.pesel = values.pesel;
    patient.date_of_birth = values.date_of_birth;
    patient.weight = parseInt(values.weight, 10);
    patient.height = parseInt(values.height, 10);
    patient.bmi = parseFloat(Math.round(values.bmi * 100) / 100);
    patient.note = values.note;
    patient.phone = values.phone;
    patient.person_authorized = values.person_authorized;
    patient.phone_authorized = values.phone_authorized;
    patient.guardianship = values.guardianship;
    setPatient(patient);
    navigation.navigate("PatientsList");
  };

  const calculateDateOfBirthValue = (pesel) => {
    const peselArray = Array.from(pesel).map(Number);
    if (peselArray.length === 11) {
      let year = 1900 + peselArray[0] * 10 + peselArray[1];
      if (peselArray[2] >= 2 && peselArray[2] < 8)
        year += Math.floor(peselArray[2] / 2) * 100;
      if (peselArray[2] >= 8) year -= 100;

      const month = (peselArray[2] % 2) * 10 + peselArray[3];
      const day = peselArray[4] * 10 + peselArray[5];

      const dateOfBirth = new Date(year, month - 1, day);
      const dateOfBirthFormatted = dateFormat(dateOfBirth, "dd - mm - yyyy");
      patient.date_of_birth = dateOfBirthFormatted;
      return dateOfBirthFormatted;
    }
    return null;
  };

  const calculateBmiValue = (height, weight) => {
    if (height && weight > 10) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      patient.bmi = parseFloat(bmi, 10).toFixed(2);
      return parseFloat(bmi, 10).toFixed(2);
    }
    return 0;
  };

  return (
    <KeyboardAvoidingView style={styles.backgroundContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Nowy pacjent</Text>
          <Formik
            initialValues={patient}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values) => onButtonPressed(values)}
          >
            {({
              handleChange,
              values,
              handleSubmit,
              isValid,
              handleBlur,
              isSubmitting,
              setFieldValue,
            }) => (
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
                <SexFormField name="sex" />
                <FormField
                  name="code"
                  onChangeText={handleChange("code")}
                  placeholder="Kod rozpoznania"
                  onBlur={handleBlur("code")}
                  keyboardType="default"
                />
                <PeselFormField
                  name="pesel"
                  onChangeText={handleChange("pesel")}
                  placeholder="Pesel"
                  onBlur={handleBlur("pesel")}
                  keyboardType="numeric"
                  calculateDependentValue={calculateDateOfBirthValue}
                />
                <FormField
                  name="date_of_birth"
                  placeholder={
                    patient.date_of_birth === ""
                      ? "Dzień miesiąc rok"
                      : patient.date_of_birth
                  }
                  onBlur={handleBlur("date_of_birth")}
                  keyboardType="numeric"
                  value={
                    calculateDateOfBirthValue(values.pesel) === 0
                      ? null
                      : patient.date_of_birth
                  }
                  editable={false}
                />
                <FormField
                  name="height"
                  leftIcon="height"
                  onChangeText={handleChange("height")}
                  placeholder="Wzrost"
                  onBlur={handleBlur("height")}
                  keyboardType="numeric"
                />
                <WeightFormField
                  name="weight"
                  leftIcon="weight"
                  onChangeText={handleChange("weight")}
                  placeholder="Waga"
                  onBlur={handleBlur("weight")}
                  keyboardType="numeric"
                  calculateDependentValue={calculateBmiValue}
                />
                <BmiFormField
                  name="bmi"
                  leftIcon="bmi"
                  onChangeText={handleChange("bmi")}
                  placeholder={
                    patient.bmi === 0 ? "BMI" : patient.bmi.toString()
                  }
                  onBlur={handleBlur("bmi")}
                  keyboardType="numeric"
                  value={
                    calculateBmiValue(values.height, values.weight) === 0
                      ? null
                      : patient.bmi.toString()
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
                  name="person_authorized"
                  leftIcon="person"
                  onChangeText={handleChange("person_authorized")}
                  placeholder="Imię i Nazwisko"
                  onBlur={handleBlur("person_authorized")}
                  keyboardType="default"
                />
                <FormField
                  name="phone_authorized"
                  leftIcon="phone"
                  onChangeText={handleChange("phone_authorized")}
                  placeholder=""
                  onBlur={handleBlur("phone_authorized")}
                  keyboardType="numeric"
                />
                <CheckboxFormField
                  name="guardianship"
                  leftIcon={isChecked ? "checked" : "unchecked"}
                  text="Ubezwłasnowolnienie"
                  onPress={() => {
                    setFieldValue("guardianship", !isChecked);
                    setChecked(!isChecked);
                  }}
                />
                <AppButton
                  buttonType="solid"
                  icon="next_btn"
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 22,
  },
  buttonContainer: {
    margin: 25,
  },
  titleText: {
    marginLeft: 30,
    marginBottom: 20,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  subtitleText: {
    color: Colors.PURPLE,
    marginLeft: 30,
    paddingTop: 25,
    fontSize: Typography.FONT_SIZE_13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

AddPatientScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddPatientScreen;
