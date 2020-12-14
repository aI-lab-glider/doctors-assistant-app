import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "react-native-elements";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Typography } from "../../constants/styles";
import { DiagnosisContext } from "../../modules/context/DiagnosisContext";

const ModuleItem = ({ moduleCode, onPress }) => {
  const { modules, deleteDiagnosis } = useContext(DiagnosisContext);
  const module = modules[moduleCode];
  const [moduleDiagnosis, setLocalDiagnosis] = useState(module.diagnosis);

  const iconColor = module.wasVisited
    ? Colors.GRAY_LIGHT
    : Colors.GRAY_VERY_LIGHT;

  const deleteResult = (result) => {
    const localDiagnosis = moduleDiagnosis.filter((diag) => {
      return diag.disease_icd10 === result.disease_icd10;
    });
    setLocalDiagnosis(localDiagnosis);
    deleteDiagnosis(moduleCode, result.disease_icd10);
  };

  return (
    <View style={[styles.container, { backgroundColor: iconColor }]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{module.name}</Text>
      </TouchableOpacity>
      {module.diagnosis &&
        module.diagnosis.map((result) => {
          return (
            <View style={styles.result} key={result.disease_icd10}>
              <Text>
                {`${result.disease_icd10}`}
                <Text> {result.disease_name}</Text>
              </Text>
              <Icon
                name="close"
                style={styles.icon}
                size={24}
                color={Colors.RED}
                onPress={() => deleteResult(result)}
              />
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: { flex: 0.9 },
  text: {
    color: Colors.PURPLE,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
  },
  icon: {
    flex: 0.1,
    paddingLeft: 10,
  },
  result: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

ModuleItem.propTypes = {
  moduleCode: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ModuleItem;
