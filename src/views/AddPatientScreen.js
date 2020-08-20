import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import { Colors, Typography } from "../constants/styles";
import { PatientsContext } from "../modules/context/PatientsContext";
import FormField from "../components/forms/FormField";
import AppButton from "../components/AppButton";
import MenUnchecked from "../assets/icons/men_unchecked.svg";
import WomenUnchecked from "../assets/icons/women_unchecked.svg";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  surname: Yup.string().required().label("Surname"),
  sex: Yup.string().oneOf(["male", "female"]).required().label("Sex"),
  pesel: Yup.string()
    .matches(/^[0-9]{11}$/, "Pesel is not valid")
    .required()
    .label("Pesel"),
  phone: Yup.string()
    .matches(/^[0-9+]{8,13}$/, "Phone number is not valid")
    .required()
    .label("Phone"),
  weight: Yup.number().integer().required().label("Weight"),
  height: Yup.number()
    .integer()
    .required("Please enter height in cm")
    .label("Height"),
  bmi: Yup.number().required().label("Bmi"),
});

const AddPatientScreen = ({ navigation }) => {
  // ID = key (PatientContextReducer) => first press - add Tabaluga, second press - edit his name
  const patient = {
    id: 7,
    name: "Tabaluga",
    surname: "Smok",
    sex: "male",
    pesel: "801201234",
    phone: "2342342342",
    weight: 44,
    height: 142,
    bmi: 4,
    note: "",
  };

  const { setPatient } = useContext(PatientsContext);

  const onButtonPressed = (values) => {
    patient.name = values.name;
    patient.surname = values.surname;
    patient.sex = values.sex;
    patient.pesel = values.pesel;
    patient.phone = values.phone;
    patient.weight = parseInt(values.weight, 10);
    patient.height = parseInt(values.height, 10);
    patient.bmi = parseInt(values.bmi, 10);
    setPatient(patient);
    navigation.navigate("PatientsList");
  };

  return (
    <KeyboardAvoidingView style={styles.backgroundContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Nowy pacjent</Text>
          <Text style={styles.basicDataText}>Dane podstawowe</Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              sex: "male",
              code: "",
              pesel: "",
              day_of_birth: "",
              phone: "",
              weight: "",
              height: "",
              bmi: "",
              note: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => onButtonPressed(values)}
          >
            {({
              handleChange,
              handleSubmit,
              isValid,
              handleBlur,
              isSubmitting,
            }) => (
              <>
                <FormField
                  name="name"
                  leftIcon="name_surname"
                  autoFocus
                  onChangeText={handleChange("name")}
                  placeholder="Imię"
                  onBlur={handleBlur("name")}
                  keyboardType="default"
                />
                <FormField
                  name="surname"
                  onChangeText={handleChange("surname")}
                  placeholder="Nazwisko"
                  onBlur={handleBlur("surname")}
                  keyboardType="default"
                />
                <View style={styles.sexChoice}>
                  <MenUnchecked style={styles.menIcon} />
                  <WomenUnchecked style={styles.womenIcon} />
                </View>
                <FormField
                  name="code"
                  onChangeText={handleChange("code")}
                  placeholder="Kod rozpoznania"
                  onBlur={handleBlur("code")}
                  keyboardType="default"
                />
                <FormField
                  name="pesel"
                  onChangeText={handleChange("pesel")}
                  placeholder="Pesel"
                  onBlur={handleBlur("pesel")}
                  keyboardType="numeric"
                />
                <FormField
                  name="day_of_birth"
                  onChangeText={handleChange("day_of_birth")}
                  placeholder="Dzień miesiąc rok"
                  onBlur={handleBlur("day_of_birth")}
                  keyboardType="numeric"
                />
                <FormField
                  name="height"
                  leftIcon="height"
                  onChangeText={handleChange("height")}
                  placeholder="Wzrost"
                  onBlur={handleBlur("height")}
                  keyboardType="numeric"
                />
                <FormField
                  name="weight"
                  leftIcon="weight"
                  onChangeText={handleChange("weight")}
                  placeholder="Waga"
                  onBlur={handleBlur("weight")}
                  keyboardType="numeric"
                />
                <FormField
                  name="bmi"
                  leftIcon="bmi"
                  onChangeText={handleChange("bmi")}
                  placeholder="BMI"
                  onBlur={handleBlur("bmi")}
                  keyboardType="numeric"
                />
                <Text style={styles.noteText}>Notatka</Text>
                <FormField
                  name="note"
                  multiline
                  leftIcon="note"
                  onChangeText={handleChange("note")}
                  placeholder="Miejsce na notatkę"
                  onBlur={handleBlur("note")}
                  keyboardType="default"
                />

                <View style={styles.buttonContainer}>
                  <AppButton
                    buttonType="outline"
                    onPress={handleSubmit}
                    title="Add Tabaluga or change his name"
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                  />
                </View>
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
    marginBottom: 10,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  basicDataText: {
    color: Colors.PURPLE,
    marginLeft: 30,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  noteText: {
    color: Colors.PURPLE,
    marginLeft: 30,
    paddingTop: 25,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  sexChoice: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 4,
  },
  menIcon: {
    alignSelf: "flex-end",
    marginLeft: -60,
  },
  womenIcon: {
    alignSelf: "flex-start",
    marginLeft: 50,
  },
});

AddPatientScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddPatientScreen;
