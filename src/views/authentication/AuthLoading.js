import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { useAuth } from "../../modules/context/Auth";
import { Colors } from "../../constants/styles";

export default function AuthLoading({ navigation }) {
  const { navigate } = navigation;
  const { getAuthState } = useAuth();

  async function initialize() {
    try {
      const { user } = await getAuthState();

      if (user) {
        navigate("Home");
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
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.WHITE,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Loading User Data</Text>
    </View>
  );
}
