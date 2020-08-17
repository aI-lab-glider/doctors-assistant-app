import React, { useState } from "react";
import { Alert, View } from "react-native";
import PropTypes from "prop-types";

import Form from "react-native-basic-form";
import * as api from "../../modules/services/Auth";

import { Header, ErrorText } from "../../components/authentication/Shared";

export default function ForgotPassword(props) {
  const { navigation } = props;

  // 1 - DECLARE VARIABLES
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fields = [{ name: "email", label: "Email Address", required: true }];

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

  const formProps = { title: "Submit", fields, onSubmit, loading };
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" }}>
      <Header title="Recover Password" />
      <View style={{ flex: 1 }}>
        <ErrorText error={error} />
        <Form
          title={formProps.title}
          fields={formProps.fields}
          onSubmit={formProps.onSubmit}
          loading={formProps.loading}
        />
      </View>
    </View>
  );
}
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
