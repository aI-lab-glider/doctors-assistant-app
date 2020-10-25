import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";

import ModuleItem from "./Item";
import TextButton from "../common/TextButton";

const ModulesList = ({ navigation }) => {
  // TODO: ADD this to database after experts provide data
  const modulesData = [
    {
      name: "Najwieksza depresja na swiecied",
      code: "duza_depresja",
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

  const onItemPress = (module) => {
    navigation.navigate("Major", { module });
  };

  return (
    <FlatList
      data={modulesData}
      keyExtractor={(module) => module.name}
      renderItem={({ item }) => (
        <ModuleItem module={item} onPress={() => onItemPress(item)} />
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
