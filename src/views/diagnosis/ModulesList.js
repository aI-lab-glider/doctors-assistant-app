import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";

const ModulesList = () => {
  const modulesData = [
    {
      name: "Duża depresja",
    },
    {
      name: "Mała depresja",
    },
    {
      name: "Średnia depresja",
    },
  ];
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <FlatList
          data={modulesData}
          keyExtractor={(module) => module.name}
          renderItem={(item) => {
            return (
              <View style={{ backgroundColor: "red", height: 100 }}>
                <Text>{item.item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 16,
    justifyContent: "center",
    padding: 20,
  },
});

export default ModulesList;
