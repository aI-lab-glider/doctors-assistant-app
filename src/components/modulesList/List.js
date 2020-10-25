import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";

import ModuleItem from "./Item";
import FinishButton from "./FinishButton";

const ModulesList = ({ navigation }) => {
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
    <FlatList
      data={modulesData}
      keyExtractor={(module) => module.name}
      renderItem={({ item }) => <ModuleItem module={item} />}
      ItemSeparatorComponent={({ highlighted }) => (
        <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
      )}
      ListFooterComponentStyle={styles.listFooterComponentStyle}
      ListFooterComponent={
        <FinishButton
          onPress={() => {
            // TODO Refactor to navigation to Patient Card
            navigation.goBack();
          }}
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
