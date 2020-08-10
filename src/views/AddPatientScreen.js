import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import { Colors } from "../constants/styles";
import { PatientsContext } from "../modules/context/PatientsContext";
import FormField from "../components/forms/FormField";
import FormButton from "../components/forms/FormButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  surname: Yup.string().required().label("Surname"),
  sex: Yup.string().required().label("Sex"),
  phone: Yup.string().required().label("Phone"),
  weight: Yup.number().required().label("Weight"),
  height: Yup.number().required("Please enter height in cm").label("Height"),
  bmi: Yup.number().required().label("Bmi"),
});

const AddPatientScreen = ({ navigation }) => {
  // ID = key (PatientContextReducer) => first press - add Tabaluga, second press - edit his name
  const patient = {
    id: 7,
    name: "Tabaluga",
    surname: "Smok",
    sex: "male",
    phone: "2342342342",
    weight: 44,
    height: 142,
    bmi: 4,
  };

  const { setPatient } = React.useContext(PatientsContext);

  const onButtonPressed = (values) => {
    patient.name = values.name;
    patient.surname = values.surname;
    patient.sex = values.sex;
    patient.phone = values.phone;
    patient.weight = values.weight;
    patient.height = values.height;
    patient.bmi = values.bmi;
    setPatient(patient);
    navigation.navigate("PatientsList");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: patient.name,
            surname: patient.surname,
            sex: patient.sex,
            phone: patient.phone,
            weight: patient.weight,
            height: patient.height,
            bmi: patient.bmi,
          }}
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
          }) => (
            <>
              <FormField
                name="name"
                autoFocus
                value={values.name}
                onChangeText={handleChange("name")}
                placeholder="Enter name"
                onBlur={handleBlur("name")}
                keyboardType="default"
              />
              <FormField
                name="surname"
                value={values.surname}
                onChangeText={handleChange("surname")}
                placeholder="Enter surname"
                onBlur={handleBlur("surname")}
                keyboardType="default"
              />
              <FormField
                name="sex"
                value={values.sex}
                onChangeText={handleChange("sex")}
                placeholder="Enter sex"
                onBlur={handleBlur("sex")}
                keyboardType="default"
              />
              <FormField
                name="phone"
                value={values.phone}
                onChangeText={handleChange("phone")}
                placeholder="Enter phone"
                onBlur={handleBlur("phone")}
                keyboardType="phone-pad"
              />
              <FormField
                name="weight"
                value={String(values.weight)}
                onChangeText={handleChange("weight")}
                placeholder="Enter weight"
                onBlur={handleBlur("weight")}
                keyboardType="numeric"
              />
              <FormField
                name="height"
                value={String(values.height)}
                onChangeText={handleChange("height")}
                placeholder="Enter height"
                onBlur={handleBlur("height")}
                keyboardType="numeric"
              />
              <FormField
                name="bmi"
                value={String(values.bmi)}
                onChangeText={handleChange("bmi")}
                placeholder="Enter bmi"
                onBlur={handleBlur("bmi")}
                keyboardType="numeric"
              />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="Add Tabaluga or change his name"
                  buttonColor="#039BE5"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_MEDIUM,
  },
  button: {
    alignSelf: "center",
  },
  nameInput: {
    alignSelf: "center",
    height: 50,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
  },
  buttonContainer: {
    margin: 25,
  },
});

AddPatientScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddPatientScreen;
