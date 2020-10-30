import React from "react";
import PropTypes from "prop-types";
import { FlatList, Text, StyleSheet } from "react-native";
import Result from "../../components/diagnosis/Result";
import DiagnosisContainer from "./DiagnosisContainer";
import {
  diseasesProbabilityPropTypes,
  modulePropTypes,
} from "../../constants/propTypes/diagnosis";
import { Colors, Typography } from "../../constants/styles";

const DiagnosisResults = ({ route }) => {
  const threshold = 0.33;
  const { diseasesProbability, module } = route.params;
  const filteredDiseasesProbability = diseasesProbability
    .filter((diseaseProbability) => {
      return diseaseProbability.probability > threshold;
    })
    .sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

  return (
    <DiagnosisContainer module={module} subTitle="Podsumowanie">
      {filteredDiseasesProbability.length > 0 && (
        <FlatList
          data={filteredDiseasesProbability}
          renderItem={({ item }) => <Result onPress={() => {}} item={item} />}
          keyExtractor={(item, index) => index.toString()}
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

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.PURPLE,
    paddingLeft: 10,
  },
});

DiagnosisResults.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      diseasesProbability: diseasesProbabilityPropTypes.isRequired,
      module: modulePropTypes.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DiagnosisResults;
