import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Colors, Typography } from "../constants/styles";
import FontForgeIcon from "../components/common/FontForgeIcon";
import SubtitleLabelWithButton from "../components/patientCard/SubtitleLabelWithButton";
import SubtitleLabel from "../components/patientCard/SubtitleLabel";
import BottomMenu from "../components/patientCard/bottomMenu";
import { calculateAge } from "../modules/utils/Calculators";
import { PatientsContext } from "../modules/context/PatientsContext";
import { BasicDataContext } from "../modules/context/BasicDataContext";

const PatientCard = ({ navigation, route }) => {
  const { patientId, patientBasicDataId } = route.params;
  const { getPatientById } = useContext(PatientsContext);
  const { getBasicDataById } = useContext(BasicDataContext);
  const patient = getPatientById(patientId);
  const patientBasicData = getBasicDataById(patientBasicDataId);

  const patientNote = patient.note ? patient.note : "";

  const [textNote, setTextNote] = useState(
    patientNote > 50 ? `${patientNote.substring(0, 20)}...` : `${patientNote}`
  );
  const [lengthMore, setLengthMore] = useState(false);

  const noteTextSize = () => {
    return {
      flex: lengthMore ? patientNote.numberOfLines : 1,
    };
  };

  const expandNoteText = () => {
    if (patientNote.length > 0) {
      setTextNote(`${patientNote}`);
      setLengthMore(!lengthMore);
    }
  };

  const onAdd = () => {};
  const onDiagnosisAdd = () => {
    navigation.navigate("Diagnosis", { patientId: patient.id });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.backgroundContainer}>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.name}>
                  {patient.name} {patient.surname}
                </Text>
                <FontForgeIcon
                  name={patient.sex === "male" ? "men_choice" : "women_choice"}
                  size={26}
                  color={Colors.PURPLE}
                  style={styles.nameIcon}
                />
                <FontForgeIcon
                  name="patient_number"
                  size={26}
                  color={Colors.PINK}
                  style={styles.numberIcon}
                />
                <Text style={styles.patientNumber}>{patient.id}</Text>
              </View>
              <Text style={styles.fieldText}>Pesel: {patient.pesel}</Text>
              <Text style={styles.fieldText}>
                Wiek: {calculateAge(patient.date_of_birth)} lat
              </Text>
              <Text style={styles.fieldText}>Hospitalizacja</Text>
              <Text style={styles.listItemFieldText}>
                {">"} Pierwszy raz w{" "}
                {patientBasicData.first_hospitalization
                  ? patientBasicData.first_hospitalization
                  : ""}
              </Text>
              <Text style={styles.listItemFieldText}>
                {">"} Liczba hospitalizacji:{" "}
                {patientBasicData.hospitalization_times
                  ? patientBasicData.hospitalization_times
                  : "0"}
              </Text>
              <Text style={styles.fieldText}>
                Inne:{" "}
                {patient.guardianship === true
                  ? "pacjent ubezwłasnowolniony"
                  : ""}
              </Text>
              <SubtitleLabelWithButton
                subtitle="Diagnoza"
                iconName="diagnosis"
                onAdd={onDiagnosisAdd}
              />
              {/* TODO: Revert date in diagnosis after MVP */}
              {/* <Text style={styles.fieldText}>14.08.2020</Text> */}
              <Text style={styles.listItemFieldText}>
                {patient.code ? ">" : ""} {patient.code}
              </Text>
              {patient.diagnosis ? (
                patient.diagnosis.map((diagnose) => (
                  <Text style={styles.listItemFieldText} key={diagnose.id}>
                    {"> "} {diagnose.disease_name}{" "}
                    <Text style={styles.diagnosisCode}>
                      ({diagnose.disease_icd10})
                    </Text>{" "}
                  </Text>
                ))
              ) : (
                <Text />
              )}
              <SubtitleLabelWithButton
                subtitle="Notatka"
                iconName="pen"
                onAdd={onAdd}
              />
              <Text
                style={[styles.noteListItemFieldText, noteTextSize()]}
                numberOfLines={lengthMore ? patientNote.numberOfLines : 1}
                scrollEnabled
                multiLine
                onPress={expandNoteText}
              >
                {patientNote ? ">" : ""} {textNote}
              </Text>
              <SubtitleLabel subtitle="Dane kontaktowe" iconName="phone" />
              <Text style={styles.fieldText}>Tel: {patient.phone}</Text>
              <Text style={styles.fieldText}>Osoba upoważniona:</Text>
              <Text style={styles.listItemFieldText}>
                {patient.person_guard ? `> ${patient.person_guard} ` : ""}
                {patient.phone_guard ? `tel. ${patient.phone_guard}` : ""}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 0.2 }}>
        <BottomMenu style={styles.bottomMenu} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 0.8,
    backgroundColor: Colors.PURPLE,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 26,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  name: {
    flex: 11,
    marginLeft: 30,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    alignSelf: "flex-start",
  },
  nameIcon: {
    flex: 2,
    alignSelf: "flex-start",
    marginRight: 10,
  },
  numberIcon: {
    flex: 2,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  patientNumber: {
    flex: 8,
    marginLeft: 5,
    color: Colors.PINK,
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  fieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginLeft: 50,
    marginVertical: 2,
  },
  listItemFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 70,
    marginRight: 15,
  },
  noteListItemFieldText: {
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 50,
    width: "75%",
  },
  diagnosisCode: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  bottomMenu: {
    flex: 1,
    bottom: 0,
    position: "absolute",
  },
});

PatientCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
      patientBasicDataId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PatientCard;
