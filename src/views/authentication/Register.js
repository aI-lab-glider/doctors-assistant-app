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
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required(),
    password: yup.string().required("Password is required").min(8),
    passwordConfirmation: yup
      .string()
      .required("Please confirm password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
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
            <Header title="Register" />
            <TextInput
              style={AUTH_STYLES.inputs}
              placeholder="first name"
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.title}
            />
            <Text> {touched.firstName && errors.firstName}</Text>

            <TextInput
              style={AUTH_STYLES.inputs}
              placeholder="last name"
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
              placeholder="password"
              onChangeText={handleChange("password")}
              value={values.title}
              onBlur={handleBlur("password")}
            />
            <Text> {touched.password && errors.password}</Text>

            <TextInput
              secureTextEntry
              style={AUTH_STYLES.inputs}
              placeholder="confirm password"
              onChangeText={handleChange("passwordConfirmation")}
              value={values.title}
              onBlur={handleBlur("passwordConfirmation")}
            />
            <Text>
              {" "}
              {touched.passwordConfirmation && errors.passwordConfirmation}
            </Text>

            <Button
              title="submit"
              color={Colors.AUTH_VIOLET}
              onPress={handleSubmit}
            />
            <CTA
              title="Already have an account?"
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
