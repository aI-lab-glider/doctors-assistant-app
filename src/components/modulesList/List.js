import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, View } from "react-native";

import { Colors } from "../../constants/styles";
import ModuleItem from "./Item";
import TextButton from "../common/TextButton";
import { modulePropTypes } from "../../constants/propTypes/diagnosis";

const ModulesList = ({ onItemPress, modules, onFinishPress }) => {
  return (
    <FlatList
      data={modules}
      keyExtractor={(module) => module.name}
      renderItem={({ item }) => (
        <ModuleItem module={item} onPress={() => onItemPress(item)} />
      )}
      ItemSeparatorComponent={({ highlighted }) => (
        <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
      )}
      ListFooterComponentStyle={styles.listFooterComponentStyle}
      ListFooterComponent={
        <TextButton onPress={onFinishPress} text="Zakończ diagnozę" />
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
  onItemPress: PropTypes.func.isRequired,
  onFinishPress: PropTypes.func.isRequired,
  modules: PropTypes.arrayOf(modulePropTypes).isRequired,
};
export default ModulesList;
