import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Alert, FlatList, StyleSheet, Text } from "react-native";
import Result from "../../components/diagnosis/Result";
import DiagnosisContainer from "./DiagnosisContainer";
import { diseasesProbabilityPropTypes } from "../../constants/propTypes/diagnosis";
import { Colors, Typography } from "../../constants/styles";
import TextButton from "../../components/common/TextButton";
import { DiagnosisContext } from "../../modules/context/DiagnosisContext";

const DiagnosisResults = ({ navigation, route }) => {
  const threshold = 0.33;
  const { diseasesProbability, moduleCode } = route.params;
  const filteredDiseasesProbability = diseasesProbability
    .filter((diseaseProbability) => {
      return diseaseProbability.probability > threshold;
    })
    .sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

  const [submitDiagnosis, setDiagnosis] = useState([]);
  const { addDiagnose } = useContext(DiagnosisContext);

  const toggleDiagnosis = (diagnosis) => {
    const newSubmitDiagnosis = submitDiagnosis;
    const diagnosisIndex = submitDiagnosis.findIndex((diag) => {
      return diag.disease_icd10 === diagnosis.disease_icd10;
    });
    if (diagnosisIndex === -1) {
      newSubmitDiagnosis.push(diagnosis);
    } else {
      newSubmitDiagnosis.splice(diagnosisIndex);
    }
    setDiagnosis(newSubmitDiagnosis);
  };

  const onSubmit = () => {
    if (submitDiagnosis.length > 0) {
      addDiagnose(moduleCode, submitDiagnosis);
      navigation.navigate("ModulesList");
    } else {
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
    }
  };

  return (
    <DiagnosisContainer moduleCode={moduleCode} subTitle="Podsumowanie">
      {filteredDiseasesProbability.length > 0 && (
        <FlatList
          data={filteredDiseasesProbability}
          renderItem={({ item }) => (
            <Result onCheckboxPress={() => toggleDiagnosis(item)} item={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={
            <TextButton onPress={onSubmit} text="Dodaj rozpoznanie" />
          }
          ListFooterComponentStyle={styles.submitButtonStyle}
          ListHeaderComponent={
            <Text style={styles.infoText}>
              Zaznacz pola, które Twoim zdaniem odpowiadają trafnej diagnozie
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
      moduleCode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  submitButtonStyle: {
    marginTop: 20,
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
