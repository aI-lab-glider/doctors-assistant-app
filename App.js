import React from "react";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log(`Initialize app in ${process.env.NODE_ENV}`);
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
