import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, View } from "react-native";
import { Colors, Typography } from "../../constants/styles";
import Result from "../../components/diagnosis/Result";
import { CodeProp } from "../../constants/propTypes/patientPropTypes";

const DiagnosisResults = ({ route }) => {
  const { diseasesProbability } = route.params;
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <FlatList
          data={diseasesProbability}
          renderItem={({ item }) => <Result onPress={() => {}} item={item} />}
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

// TODO: Extract Disease Probability Prop
DiagnosisResults.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      diseasesProbability: PropTypes.arrayOf(
        PropTypes.shape({
          disease_icd10: CodeProp.isRequired,
          disease_name: PropTypes.string.isRequired,
          probability: PropTypes.number.isRequired,
          conditionsAcc: PropTypes.shape({
            main: PropTypes.shape({
              allAnswers: PropTypes.number,
              validAnswers: PropTypes.number,
            }).isRequired,
            side: PropTypes.shape({
              allAnswers: PropTypes.number,
              validAnswers: PropTypes.number,
            }).isRequired,
            detail: PropTypes.shape({
              allAnswers: PropTypes.number,
              validAnswers: PropTypes.number,
            }).isRequired,
          }),
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default DiagnosisResults;
