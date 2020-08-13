import React, { useState } from "react";
import { View } from "react-native";

import Form from "react-native-basic-form";
import * as api from "../../modules/services/Auth";
import { useAuth } from "../../modules/context/Auth";

import { Header, ErrorText } from "../../components/authentication/Shared";

export default function Username(props) {
  const { navigation } = props;

  // 1 - DECLARE VARIABLES
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { state, updateUser } = useAuth();

  const fields = [{ name: "username", label: "Username", required: true }];

  async function onSubmit(data) {
    setLoading(true);

    try {
      const response = await api.updateProfile(state.user._id, data);
      updateUser(response.user);

      setLoading(false);

      navigation.navigate("App");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  const formProps = { title: "Submit", fields, onSubmit, loading };
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" }}>
      <Header title="Select Username" />
      <View style={{ flex: 1 }}>
        <ErrorText error={error} />
        <Form {...formProps} />
      </View>
    </View>
  );
}

Username.navigationOptions = ({}) => {
  return {
    title: ``,
  };
};
