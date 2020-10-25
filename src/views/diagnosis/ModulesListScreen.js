import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/styles";
import ModulesList from "../../components/modulesList/List";

const ModulesListScreen = ({ navigation }) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <ModulesList navigation={navigation} />
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

ModulesListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ModulesListScreen;
