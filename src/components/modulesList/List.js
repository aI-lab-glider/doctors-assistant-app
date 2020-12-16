import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, View } from "react-native";

import { Colors } from "../../constants/styles";
import ModuleItem from "./Item";
import TextButton from "../common/TextButton";
import { DiagnosisContext } from "../../modules/context/DiagnosisContext";

const ModulesList = ({ onItemPress, onFinishPress }) => {
  const { modules } = useContext(DiagnosisContext);
  const moduleCodes = Object.keys(modules !== undefined ? modules : {});
  return (
    <FlatList
      data={moduleCodes}
      keyExtractor={(module) => module}
      renderItem={({ item: moduleCodeItem }) => (
        <ModuleItem
          moduleCode={moduleCodeItem}
          onPress={() => onItemPress(moduleCodeItem)}
        />
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
    height: 1,
    backgroundColor: Colors.PURPLE_LIGHT,
    width: "90%",
    marginLeft: 20,
  },
  listFooterComponentStyle: { marginTop: 20 },
});

ModulesList.propTypes = {
  onItemPress: PropTypes.func.isRequired,
  onFinishPress: PropTypes.func.isRequired,
};
export default ModulesList;
