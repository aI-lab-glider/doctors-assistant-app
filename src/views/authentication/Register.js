import PropTypes from "prop-types";
import React, { useState } from "react";
import { Alert, View, Button, TextInput, Text } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import CTA from "../../components/authentication/CTA";
import { Header } from "../../components/authentication/Shared";
import { Colors } from "../../constants/styles";
import * as api from "../../api/Auth";
import { AUTH_STYLES } from "../../constants/styles/auth";

export default function Register(props) {
  const { navigation } = props;

  // 1 - DECLARE VARIABLES
  const [setError] = useState(null);
  const [setLoading] = useState(false);

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
    email: yup.string().email().required("Email jest wymagany"),
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
    <View style={AUTH_STYLES.container}>
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
        }) => (
          <View>
            <Header title="Rejestracja" />
            <TextInput
              style={AUTH_STYLES.inputs}
              placeholder="imię"
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.title}
            />
            <Text> {touched.firstName && errors.firstName}</Text>

            <TextInput
              style={AUTH_STYLES.inputs}
              placeholder="nazwisko"
              onChangeText={handleChange("lastName")}
              value={values.title}
              s
              onBlur={handleBlur("lastName")}
            />
            <Text> {touched.lastName && errors.lastName}</Text>

            <TextInput
              style={AUTH_STYLES.inputs}
              placeholder="email"
              onChangeText={handleChange("email")}
              value={values.title}
              onBlur={handleBlur("email")}
            />
            <Text> {touched.email && errors.email}</Text>

            <TextInput
              secureTextEntry
              style={AUTH_STYLES.inputs}
              placeholder="hasło"
              onChangeText={handleChange("password")}
              value={values.title}
              onBlur={handleBlur("password")}
            />
            <Text> {touched.password && errors.password}</Text>

            <TextInput
              secureTextEntry
              style={AUTH_STYLES.inputs}
              placeholder="potwierdzenie hasła"
              onChangeText={handleChange("passwordConfirmation")}
              value={values.title}
              onBlur={handleBlur("passwordConfirmation")}
            />
            <Text>
              {" "}
              {touched.passwordConfirmation && errors.passwordConfirmation}
            </Text>

            <Button
              title="Wyślij"
              color={Colors.AUTH_VIOLET}
              onPress={handleSubmit}
            />
            <CTA
              title="Masz już konto ?"
              ctaText="Login"
              onPress={() => navigation.replace("Login")}
              style={AUTH_STYLES.login}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

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
