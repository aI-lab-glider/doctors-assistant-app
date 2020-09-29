import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors, Typography } from "../constants/styles";
import goOnDetailsQuestions from "../modules/diagnosis/goOnDetailsQuestions";
import calculateDiseasesProbability from "../modules/diagnosis/calculateDiseasesProbability";

const DiagnosisScreen = () => {
  const moduleCode = "duza_depresja";
  const majorAnswers = [1, 0, 0, 1];
  const minorAnswers = [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0];

  const [diseaseProbability, setDiseaseProbability] = useState([]);

  useEffect(() => {
    if (goOnDetailsQuestions(moduleCode, majorAnswers)) {
      setDiseaseProbability(
        calculateDiseasesProbability(majorAnswers, minorAnswers, moduleCode)
      );
    }
  }, []);

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Text>Kod modułu: {moduleCode}</Text>
        <Text>Odpowiedzi na pytania podstawowe: {majorAnswers}</Text>
        <Text>Odpowiedzi na pytania szczegółowe: {minorAnswers}</Text>
        <Text style={styles.module}>Moduł dużej depresji</Text>
        <Text style={styles.summary}>Podsumowanie</Text>
        <FlatList
          data={diseaseProbability}
          renderItem={({ item }) => (
            <Text>
              {item.disease_name}
              {item.probability}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
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
    padding: 20,
  },
  module: {
    fontSize: Typography.FONT_SIZE_20,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.PURPLE,
  },
  summary: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.PURPLE,
  },
});

export default DiagnosisScreen;
