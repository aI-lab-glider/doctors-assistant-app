import React from "react";
import PropTypes from "prop-types";
import { Alert, FlatList, StyleSheet, Text } from "react-native";
import Result from "../../components/diagnosis/Result";
import DiagnosisContainer from "./DiagnosisContainer";
import {
  diseasesProbabilityPropTypes,
  modulePropTypes,
} from "../../constants/propTypes/diagnosis";
import AppButton from "../../components/common/AppButton";
import { Colors, Typography } from "../../constants/styles";

const DiagnosisResults = ({ navigation, route }) => {
  const threshold = 0.33;
  const { diseasesProbability, module } = route.params;
  const filteredDiseasesProbability = diseasesProbability
    .filter((diseaseProbability) => {
      return diseaseProbability.probability > threshold;
    })
    .sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

  const onSubmit = () => {
    Alert.alert(
      "",
      "Nie zatwierdzono żadnej diagnozy. Czy na pewno chcesz zakończyć i powrócić do listy modułów?",
      [
        {
          text: "Kontynuuj",
          style: "cancel",
          onPress: () => {},
        },
        {
          text: "Zakończ",
          style: "destructive",
          onPress: () => {
            navigation.navigate("ModulesList");
          },
        },
      ]
    );
  };

  return (
    <DiagnosisContainer module={module} subTitle="Podsumowanie">
      {filteredDiseasesProbability.length > 0 && (
        <FlatList
          data={filteredDiseasesProbability}
          renderItem={({ item }) => <Result onPress={() => {}} item={item} />}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={
            <AppButton
              icon="next_btn"
              onPress={onSubmit}
              iconStyle={styles.submitButtonStyle}
            />
          }
          ListHeaderComponent={
            <Text style={styles.infoText}>
              Zaznacz pola wyboru ze zdiagnozowanymi chorobami i zatwierdź je
              przyciskiem na dole
            </Text>
          }
        />
      )}
      {filteredDiseasesProbability.length === 0 && (
        <Text style={styles.text}>
          Brak chorób o prawdopodobieństwie większym niż {threshold * 100}%
        </Text>
      )}
    </DiagnosisContainer>
  );
};

DiagnosisResults.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      diseasesProbability: diseasesProbabilityPropTypes.isRequired,
      module: modulePropTypes.isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  submitButtonStyle: {
    marginTop: 0,
  },
  infoText: {
    marginBottom: 20,
    marginHorizontal: 10,
    color: Colors.PURPLE,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
  },
  text: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.PURPLE,
    paddingLeft: 10,
  },
});

export default DiagnosisResults;
