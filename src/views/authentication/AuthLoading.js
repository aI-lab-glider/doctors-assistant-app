import React, { useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { StackActions } from "@react-navigation/native";
import PropTypes from "prop-types";

import { useAuth } from "../../modules/context/Auth";

export default function AuthLoading({ navigation }) {
  const { navigate } = navigation;
  const { getAuthState } = useAuth();

  async function initialize() {
    try {
      const { user } = await getAuthState();

      if (user) {
        // check if username exist
        const username = !!user.username;

        if (username) navigate("Home");
        else
          navigate("Auth", {}, StackActions.replace({ routeName: "Username" }));
      } else navigate("Auth");
    } catch (e) {
      navigate("Auth");
    }
  }

  useEffect(() => {
    initialize();
  }, []);

  AuthLoading.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <ActivityIndicator />
      <Text>Loading User Data</Text>
    </View>
  );
}
