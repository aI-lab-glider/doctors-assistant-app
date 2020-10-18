import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { SearchBar } from "react-native-elements";
import { Colors } from "../constants/styles";
import List from "../components/patientsList";
import FontForgeIcon from "../components/common/FontForgeIcon";
import CircleButton from "../components/common/CircleButton";
import { PatientsContext } from "../modules/context/PatientsContext";
import { BasicDataContext } from "../modules/context/BasicDataContext";

const MINIMUM_SEARCH_STRING_LENGTH = 3;
const PatientsList = ({ navigation }) => {
  const { patients } = React.useContext(PatientsContext);
  const { patientsBasicData } = React.useContext(BasicDataContext);
  const [filteredPatients, setFilteredPatients] = useState(patients);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredPatients(patients);
    setSearch("");
  }, [patients]);

  const onSearchChange = (searchString) => {
    setSearch(searchString);
    const searchLowerCase = searchString.toLowerCase();

    let newPatients = patients;
    if (search.length >= MINIMUM_SEARCH_STRING_LENGTH) {
      newPatients = patients.filter((patient) => {
        const nameFilter = patient.name.toLowerCase().includes(searchLowerCase);
        const surnameFilter = patient.surname
          .toLowerCase()
          .includes(searchLowerCase);
        return nameFilter || surnameFilter;
      });
    }
    setFilteredPatients(newPatients);
  };

  const addNewPatientBtPressed = () => {
    navigation.navigate("Registration");
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
            onChangeText={onSearchChange}
            placeholder="Szukaj pacjenta..."
            clearIcon={{ size: 32, color: Colors.PINK }}
          />
          <CircleButton icon="add" size={32} onPress={addNewPatientBtPressed} />
        </View>
        <List
          navigation={navigation}
          patients={filteredPatients}
          patientsBasicData={patientsBasicData}
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
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

PatientsList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default PatientsList;
