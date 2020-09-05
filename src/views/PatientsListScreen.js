import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { SearchBar } from "react-native-elements";
import { Colors } from "../constants/styles";
import List from "../components/patientsList";
import FontForgeIcon from "../components/common/FontForgeIcon";
import CircleButton from "../components/common/CircleButton";

const PatientsListScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const addNewPatientBtPressed = () => {
    navigation.navigate("AddPatient");
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.searchHeader}>
          <FontForgeIcon name="search" size={32} color={Colors.PINK} />
          <SearchBar
            containerStyle={{
              backgroundColor: "transparent",
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
              flex: 1,
            }}
            inputContainerStyle={{
              backgroundColor: "transparent",
            }}
            inputStyle={{
              backgroundColor: "transparent",
              borderBottomColor: Colors.PURPLE,
              borderBottomWidth: 2,
            }}
            searchIcon={null}
            value={search}
            onChangeText={setSearch}
            placeholder="Szukaj pacjenta..."
            clearIcon={{ size: 32, color: Colors.PINK }}
          />
          <CircleButton icon="add" size={32} onPress={addNewPatientBtPressed} />
        </View>
        <List navigation={navigation} />
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
    paddingTop: 22,
    justifyContent: "center",
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

PatientsListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default PatientsListScreen;
