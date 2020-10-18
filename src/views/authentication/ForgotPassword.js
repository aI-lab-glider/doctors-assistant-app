import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import * as api from "../../api/Auth";
import { Colors, Typography } from "../../constants/styles";
import { AUTH_STYLES } from "../../constants/styles/auth";

export default function ForgotPassword(props) {
  const { navigation } = props;

  // 1 - DECLARE VARIABLES
  const [setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(state) {
    setLoading(true);

    try {
      const response = await api.forgotPassword(state);
      setLoading(false);

      Alert.alert(
        "Recover Password",
        response.message,
        [{ text: "OK", onPress: () => navigation.goBack() }],
        { cancelable: false }
      );
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  const forgotPasswordSchema = yup.object({
    email: yup
      .string()
      .email("Podaj poprawny email")
      .required("Email jest wymagany"),
  });

  return (
    <View style={styles.backgroundContainer}>
      <View style={AUTH_STYLES.container}>
        <Text style={styles.titleText}>Odzyskiwanie hasła</Text>
        <View style={styles.inputs}>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values) => {
              onSubmit(
                (({ email }) => ({
                  email,
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
                  placeholder="Adres e-mail"
                  onChangeText={handleChange("email")}
                  value={values.title}
                  onBlur={handleBlur("email")}
                />
                <Text> {touched.email && errors.email}</Text>
                <Button
                  style={styles.forgotPasswordButton}
                  title="Wyślij"
                  color={Colors.PURPLE}
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                />
                <ActivityIndicator animating={loading} />
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
  forgotPasswordButton: {
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

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

ForgotPassword.navigationOptions = () => {
  return {
    title: ``,
  };
};
