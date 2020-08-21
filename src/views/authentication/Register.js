import PropTypes from "prop-types";
import React, { useState } from "react";
import { Alert, View, StyleSheet } from "react-native";
import Form from "react-native-basic-form";
import CTA from "../../components/authentication/CTA";
import { ErrorText, Header } from "../../components/authentication/Shared";
import { Colors } from "../../constants/styles";
import * as api from "../../api/Auth";

export default function Register(props) {
  const { navigation } = props;

  // 1 - DECLARE VARIABLES
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fields = [
    { name: "firstName", label: "First Name", required: true },
    { name: "lastName", label: "Last Name", required: true },
    { name: "email", label: "Email Address", required: true },
    { name: "password", label: "Password", required: true, secure: true },
  ];

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
      setError(err.message);
      setLoading(false);
    }
  }

  const formProps = { title: "Register", fields, onSubmit, loading };
  return (
    <View style={styles.container}>
      <Header title="Register" />
      <View style={styles.inputs}>
        <ErrorText error={error} />
        <Form
          title={formProps.title}
          fields={formProps.fields}
          onSubmit={formProps.onSubmit}
          loading={formProps.loading}
        >
          <CTA
            title="Already have an account?"
            ctaText="Login"
            onPress={() => navigation.replace("Login")}
            style={styles.login}
          />
        </Form>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
  },
  login: {
    marginTop: 50,
  },
  inputs: {
    flex: 1,
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
