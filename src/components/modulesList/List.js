import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";

import ModuleItem from "./Item";
import TextButton from "./TextButton";

const ModulesList = ({ navigation }) => {
  const modulesData = [
    {
      name: "Najwieksza depresja na swiecied",
      module_code: "duza_depresja",
    },
    {
      name: "Mała depresja",
      module_code: "duza_depresja",
    },
    {
      name: "Średnia depresja",
      module_code: "duza_depresja",
    },
  ];

  const onItemPress = (moduleCode) => {
    navigation.navigate("Minor", { moduleCode });
  };

  return (
    <FlatList
      data={modulesData}
      keyExtractor={(module) => module.name}
      renderItem={({ item }) => (
        <ModuleItem
          module={item}
          onPress={() => onItemPress(item.module_code)}
        />
      )}
      ItemSeparatorComponent={({ highlighted }) => (
        <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
      )}
      ListFooterComponentStyle={styles.listFooterComponentStyle}
      ListFooterComponent={
        <TextButton
          onPress={() => {
            // TODO Refactor to navigation to Patient Card
            navigation.goBack();
          }}
          text="Zakończ diagnozę"
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: Colors.PURPLE_LIGHT,
  },
  listFooterComponentStyle: { marginTop: 20 },
});

ModulesList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
export default ModulesList;
