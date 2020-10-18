import PropTypes from "prop-types";
import React, { useState } from "react";
import { Alert, View, Button, TextInput, Text, StyleSheet, ActivityIndicator } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import CTA from "../../components/authentication/CTA";
import { Colors, Typography } from "../../constants/styles";
import * as api from "../../api/Auth";
import { AUTH_STYLES } from "../../constants/styles/auth";

export default function Register(props) {
  const { navigation } = props;

  // 1 - DECLARE VARIABLES
  const [setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(state) {
    setLoading(true);

    try {
      const response = await api.register(state);
      setLoading(false);
      Alert.alert(
        "Registration Successful",
        response.message,
        [{ text: "OK", onPress: () => navigation.replace("Login") }],
        { cancelable: false }
      );
    } catch (err) {
      Alert.alert("Registration Unsuccessful", err.message);
      setError(err.message);
      setLoading(false);
    }
  }

  const registerSchema = yup.object({
    firstName: yup.string().required("Imię jest wymagane"),
    lastName: yup.string().required("Nazwisko jest wymagane"),
    email: yup
      .string()
      .email("Podaj poprawny email")
      .required("Email jest wymagany"),
    password: yup
      .string()
      .required("Hasło jest wymagane, minimum 8 znaków")
      .min(8),
    passwordConfirmation: yup
      .string()
      .required("Proszę potwierdz hasło")
      .oneOf([yup.ref("password"), null], "Hasła muszą się zgadzać"),
  });

  return (
    <View style={styles.backgroundContainer}>
      <View style={AUTH_STYLES.container}>
        <Text style={styles.titleText}>Rejestracja</Text>
        <View style={styles.inputs}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              onSubmit(
                (({ email, firstName, lastName, password }) => ({
                  email,
                  firstName,
                  lastName,
                  password,
                }))(values)
              );
            }}
          >
            {({
              handleChange,
              values,
              handleBlur,
              touched,
              errors,
              handleSubmit,
              isValid,
              isSubmitting,
            }) => (
              <View>
                <TextInput
                  style={AUTH_STYLES.inputs}
                  placeholder="Imię"
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.title}
                />
                <Text> {touched.firstName && errors.firstName}</Text>

                <TextInput
                  style={AUTH_STYLES.inputs}
                  placeholder="Nazwisko"
                  onChangeText={handleChange("lastName")}
                  value={values.title}
                  s
                  onBlur={handleBlur("lastName")}
                />
                <Text> {touched.lastName && errors.lastName}</Text>

                <TextInput
                  style={AUTH_STYLES.inputs}
                  placeholder="Adres e-mail"
                  onChangeText={handleChange("email")}
                  value={values.title}
                  onBlur={handleBlur("email")}
                />
                <Text> {touched.email && errors.email}</Text>

                <TextInput
                  secureTextEntry
                  style={AUTH_STYLES.inputs}
                  placeholder="Hasło"
                  onChangeText={handleChange("password")}
                  value={values.title}
                  onBlur={handleBlur("password")}
                />
                <Text> {touched.password && errors.password}</Text>

                <TextInput
                  secureTextEntry
                  style={AUTH_STYLES.inputs}
                  placeholder="Potwierdzenie hasła"
                  onChangeText={handleChange("passwordConfirmation")}
                  value={values.title}
                  onBlur={handleBlur("passwordConfirmation")}
                />
                <Text>
                  {" "}
                  {touched.passwordConfirmation && errors.passwordConfirmation}
                </Text>

                <Button
                  style={styles.registerButton}
                  title="Wyślij"
                  color={Colors.PURPLE}
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                />
                <ActivityIndicator animating={loading}/>
                <CTA
                  title="Masz już konto ?"
                  ctaText="Zaloguj"
                  onPress={() => navigation.replace("Login")}
                  style={AUTH_STYLES.login}
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
  },
  registerButton: {
    alignSelf: "center",
    marginTop: 17,
    marginRight: 17,
  },
  inputs: {
    flex: 1,
    marginHorizontal: 50,
  },
  titleText: {
    textAlign: "center",
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

Register.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

Register.navigationOptions = () => {
  return {
    title: ``,
  };
};
