import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import Form from "react-native-basic-form";
import * as api from "../../api/Auth";
import { useAuth } from "../../modules/context/Auth";

import CTA from "../../components/authentication/CTA";
import { Header, ErrorText } from "../../components/authentication/Shared";
import { Colors } from "../../constants/styles";

export default function Login(props) {
  const { navigation } = props;
  const { navigate } = navigation;

  // 1 - DECLARE VARIABLES
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useAuth();

  const fields = [
    { name: "email", label: "Email Address", required: true },
    { name: "password", label: "Password", required: true, secure: true },
  ];

  async function onSubmit(state) {
    setLoading(true);

    try {
      const response = await api.login(state);
      await handleLogin(response);

      setLoading(false);

      // check if username is null
      const username = response.user.username !== null;
      if (username) navigate("Home");
      else navigation.replace("Username");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  const formProps = { title: "Login", fields, onSubmit, loading };
  return (
    <View style={styles.container}>
      <Header title="Login" />
      <View style={styles.inputs}>
        <ErrorText error={error} />
        <Form
          title={formProps.title}
          fields={formProps.fields}
          onSubmit={formProps.onSubmit}
          loading={formProps.loading}
        >
          <CTA
            ctaText="Forgot Password?"
            onPress={() => navigation.navigate("ForgotPassword")}
            style={styles.forgotPassword}
          />

          <CTA
            title={"Don't have an account?"}
            ctaText="Register"
            onPress={() => navigation.replace("Register")}
            style={styles.register}
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
  register: {
    marginTop: 50,
  },
  forgotPassword: {
    marginTop: 20,
  },
  inputs: {
    flex: 1,
  },
});

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

Login.navigationOptions = () => {
  return {
    title: ``,
  };
};
