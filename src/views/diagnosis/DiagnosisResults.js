import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import Result from "../../components/diagnosis/Result";
import DiagnosisContainer from "./DiagnosisContainer";
import {
  diseasesProbabilityPropTypes,
  modulePropTypes,
} from "../../constants/propTypes/diagnosis";

const DiagnosisResults = ({ route }) => {
  const { diseasesProbability, module } = route.params;
  return (
    <DiagnosisContainer module={module}>
      <FlatList
        data={diseasesProbability}
        renderItem={({ item }) => <Result onPress={() => {}} item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </DiagnosisContainer>
  );
};

DiagnosisResults.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      diseasesProbability: diseasesProbabilityPropTypes.isRequired,
      module: modulePropTypes.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DiagnosisResults;
