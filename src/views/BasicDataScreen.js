import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Colors, Typography } from "../constants/styles";
import FormField from "../components/forms/FormField";
import AppButton from "../components/common/AppButton";
import { PatientsContext } from "../modules/context/PatientsContext";
import { BasicDataContext } from "../modules/context/BasicDataContext";
import basicDataValidationSchema from "../constants/validationSchemas/basicDataValidationSchema";
import SelectFormField from "../components/forms/SelectFormField";
import PastPsychiatricTreatmentFormField from "../components/forms/PastPsychiatricTreatmentFormField";
import MultiChoiceFormField from "../components/forms/MultiChoiceFormField";
import FillFormField from "../components/forms/FillFormField";
import RadioButton from "../components/forms/RadioButton";
import Patient from "../constants/propTypes/patientPropTypes";

const BasicDataScreen = ({ route, navigation }) => {
  const { patient } = route.params;
  const { setPatient } = useContext(PatientsContext);
  const { setBasicData } = useContext(BasicDataContext);
  const patientId = patient.id;

  const basicData = {
    id: 8,
    patient_id: patientId,
    reason_of_report: "",
    major_ailments: "",
    suicidal_thoughts_choice: null,
    suicidal_thoughts: "",
    other_ailments: "",
    past_diseases_choice: "",
    past_diseases: "",
    past_psychiatric_treatment: null,
    first_hospitalization: "",
    hospitalization_times: 0,
    pharmacotherapy: "",
    psychotherapy: "",
    family_therapy: "",
    medications_used: "",
    allergies: "",
    hygiene: "",
    education_choice: "",
    education: "",
    professional_status: "",
    social_conditions: "",
    social_assistance_choice: null,
    social_assistance: "",
    social_level_changes: "",
    development_data: "",
    family_situation: "",
    family_situation_changes: "",
    family_relationships: "",
    hereditary_taint: "",
    physical_activity: "",
    self_mutilation: "",
    occupational_exposure: "",
    alcohol: "",
    nicotine: "",
    psychoactive_substances: "",
    diet_choice: "",
    diet: "",
    family_interview: "",
  };

  const onButtonPressed = (values) => {
    basicData.reason_of_report = values.reason_of_report;
    basicData.major_ailments = values.major_ailments;
    basicData.suicidal_thoughts_choice = values.suicidal_thoughts_choice;
    basicData.suicidal_thoughts = values.suicidal_thoughts;
    basicData.other_ailments = values.other_ailments;
    basicData.past_diseases_choice = values.past_diseases_choice;
    basicData.past_diseases = values.past_diseases;
    basicData.past_psychiatric_treatment = values.past_psychiatric_treatment;
    basicData.first_hospitalization = values.first_hospitalization;
    basicData.hospitalization_times = parseInt(
      values.hospitalization_times,
      10
    );
    basicData.pharmacotherapy = values.pharmacotherapy;
    basicData.psychotherapy = values.psychotherapy;
    basicData.family_therapy = values.family_therapy;
    basicData.medications_used = values.medications_used;
    basicData.allergies = values.allergies;
    basicData.hygiene = values.hygiene;
    basicData.education_choice = values.education_choice;
    basicData.education = values.education;
    basicData.professional_status = values.professional_status;
    basicData.social_conditions = values.social_conditions;
    basicData.social_assistance_choice = values.social_assistance_choice;
    basicData.social_assistance = values.social_assistance;
    basicData.social_level_changes = values.social_level_changes;
    basicData.development_data = values.development_data;
    basicData.family_situation = values.family_situation;
    basicData.family_situation_changes = values.family_situation_changes;
    basicData.family_relationships = values.family_relationships;
    basicData.hereditary_taint = values.hereditary_taint;
    basicData.physical_activity = values.physical_activity;
    basicData.self_mutilation = values.self_mutilation;
    basicData.occupational_exposure = values.occupational_exposure;
    basicData.alcohol = values.alcohol;
    basicData.nicotine = values.nicotine;
    basicData.psychoactive_substances = values.psychoactive_substances;
    basicData.diet_choice = values.diet_choice;
    basicData.diet = values.diet;
    basicData.family_interview = values.family_interview;
    setBasicData(basicData);
    setPatient(patient);
    navigation.navigate("PhysicalExamination", {
      patientId,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.backgroundContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Wywiad</Text>
          <Formik
            initialValues={basicData}
            enableReinitialize
            validationSchema={basicDataValidationSchema}
            onSubmit={(values) => onButtonPressed(values)}
          >
            {({
              handleChange,
              values,
              handleSubmit,
              isValid,
              handleBlur,
              isSubmitting,
            }) => (
              <>
                <Text style={styles.subtitleText}>
                  Powód i kontekst zgłoszenia
                </Text>
                <FormField
                  name="reason_of_report"
                  onChangeText={handleChange("reason_of_report")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("reason_of_report")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Główne dolegliwości</Text>
                <FormField
                  name="major_ailments"
                  onChangeText={handleChange("major_ailments")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("major_ailments")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Obecność myśli i tendencji suicydalnych lub homicydalnych
                </Text>
                <SelectFormField
                  name="suicidal_thoughts_choice"
                  leftText="Obecne"
                  rightText="Nieobecne"
                />
                <FormField
                  name="suicidal_thoughts"
                  onChangeText={handleChange("suicidal_thoughts")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("suicidal_thoughts")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Inne dolegliwości</Text>
                <FormField
                  name="other_ailments"
                  onChangeText={handleChange("other_ailments")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("other_ailments")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Przebyte choroby i operacje
                </Text>
                <MultiChoiceFormField
                  name="past_diseases_choice"
                  options={[
                    "Poważne urazy głowy",
                    "Zapalenia w obrębie CSN",
                    "Epizody drgawkowe",
                  ]}
                />
                <FormField
                  name="past_diseases"
                  onChangeText={handleChange("past_diseases")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("past_diseases")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Przebieg dotychczasowego leczenia
                </Text>
                <Text style={styles.listItemFieldText}>
                  W przeszłości pacjent {"  "}_____{"  "} psychiatrycznie
                </Text>
                <PastPsychiatricTreatmentFormField
                  name="past_psychiatric_treatment"
                  leftText="leczył się"
                  rightText="nie leczył się"
                />
                <FillFormField
                  name="first_hospitalization"
                  onChangeText={handleChange("first_hospitalization")}
                  placeholder="rok"
                  labelText="Pierwszy raz przyjęty w:"
                  onBlur={handleBlur("first_hospitalization")}
                  keyboardType="numeric"
                  editable={values.past_psychiatric_treatment !== false}
                />
                <FillFormField
                  name="hospitalization_times"
                  onChangeText={handleChange("hospitalization_times")}
                  placeholder={
                    values.pastPsychiatricTreatment ||
                    values.pastPsychiatricTreatment == null
                      ? "ilość razy"
                      : "0"
                  }
                  labelText="Liczba hospitalizacji:      "
                  onBlur={handleBlur("hospitalization_times")}
                  keyboardType="numeric"
                  editable={values.past_psychiatric_treatment !== false}
                  value={
                    values.past_psychiatric_treatment === false ? "0" : null
                  }
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} farmakoterapia
                </Text>
                <FormField
                  name="pharmacotherapy"
                  onChangeText={handleChange("pharmacotherapy")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("pharmacotherapy")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} psychoterapia
                </Text>
                <FormField
                  name="psychotherapy"
                  onChangeText={handleChange("psychotherapy")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("psychotherapy")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} terapia rodzin
                </Text>
                <FormField
                  name="family_therapy"
                  onChangeText={handleChange("family_therapy")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("family_therapy")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Stosowane leki</Text>
                <Text style={styles.commentFieldText}>
                  (z uwzględnieniem wszystkich leków przyjmowanych obecnie)
                </Text>
                <FormField
                  name="medications_used"
                  onChangeText={handleChange("medications_used")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("medications_used")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Uczulenia i osobnicze reakcje
                </Text>
                <FormField
                  name="allergies"
                  onChangeText={handleChange("allergies")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("allergies")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Ocena stanu społecznego</Text>
                <Text style={styles.listItemFieldText}>{"> "} higiena</Text>
                <FormField
                  name="hygiene"
                  onChangeText={handleChange("hygiene")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("hygiene")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} poziom wykształcenia
                </Text>
                <RadioButton
                  name="education_choice"
                  options={[
                    "podstawowe",
                    "gimnazjum",
                    "średnie",
                    "maturalne",
                    "wyższe",
                    "doktorat",
                    "habilitacja",
                    "profesura",
                  ]}
                />
                <FormField
                  name="education"
                  onChangeText={handleChange("education")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("education")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} status zawodowy
                </Text>
                <FormField
                  name="professional_status"
                  onChangeText={handleChange("professional_status")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("professional_status")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} warunki socjalne, materialne, mieszkaniowe
                </Text>
                <FormField
                  name="social_conditions"
                  onChangeText={handleChange("social_conditions")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("social_conditions")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} korzystanie z pomocy społecznej
                </Text>
                <SelectFormField
                  name="social_assistance_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="social_assistance"
                  onChangeText={handleChange("social_assistance")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("social_assistance")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} zmiany poziomu funkcjonowania społecznego
                </Text>
                <FormField
                  name="social_level_changes"
                  onChangeText={handleChange("social_level_changes")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("social_level_changes")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Wywiad rodzinny i rozwojowy
                </Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} istotne dane rozwojowe
                </Text>
                <FormField
                  name="development_data"
                  onChangeText={handleChange("development_data")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("development_data")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} sytuacja rodzinna
                </Text>
                <FormField
                  name="family_situation"
                  onChangeText={handleChange("family_situation")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("family_situation")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} zmiany sytuacji rodzinnej na przestrzeni ostatnich lat
                </Text>
                <FormField
                  name="family_situation_changes"
                  onChangeText={handleChange("family_situation_changes")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("family_situation_changes")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} relacje rodzinne z uwzględnieniem więzi i obszarów
                  konfliktowych
                </Text>
                <FormField
                  name="family_relationships"
                  onChangeText={handleChange("family_relationships")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("family_relationships")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} obciążenia dziedziczne
                </Text>
                <Text style={styles.commentFieldText}>
                  (w tym zwłaszcza chorobami psychicznymi, uzależnieniami,
                  myślami i tendencjami suicydalnymi lub homicydalnymi)
                </Text>
                <FormField
                  name="hereditary_taint"
                  onChangeText={handleChange("hereditary_taint")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("hereditary_taint")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Wywiad środowiskowy</Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} poziom aktywności fizycznej
                </Text>
                <FormField
                  name="physical_activity"
                  onChangeText={handleChange("physical_activity")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("physical_activity")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} samouszkodzenia w wywiadzie
                </Text>
                <FormField
                  name="self_mutilation"
                  onChangeText={handleChange("self_mutilation")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("self_mutilation")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} narażenie na zagrożenie zawodowe
                </Text>
                <FormField
                  name="occupational_exposure"
                  onChangeText={handleChange("occupational_exposure")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("occupational_exposure")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Używki</Text>
                <Text style={styles.listItemFieldText}>{"> "} alkohol</Text>
                <FormField
                  name="alcohol"
                  onChangeText={handleChange("alcohol")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("alcohol")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} nikotyna</Text>
                <FormField
                  name="nicotine"
                  onChangeText={handleChange("nicotine")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("nicotine")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} nielegalne substancje psychoaktywne
                </Text>
                <FormField
                  name="psychoactive_substances"
                  onChangeText={handleChange("psychoactive_substances")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("psychoactive_substances")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Dieta</Text>
                <RadioButton
                  name="diet_choice"
                  options={[
                    "pacjent nie przestrzega żadnych zasad dietetycznych",
                    "w wywiadzie istotne błędy dietetyczne",
                    "nadmierna podaż kaloryczna",
                    "niedostateczna podaż kaloryczna",
                    "dieta uboga",
                    "dieta cukrzycowa",
                    "dieta niskotłuszczowa",
                    "dieta oszczędzająca",
                    "dieta bezmięsna",
                    "pacjent stosuje dietę zgodną z zaleceniami lekarskimi",
                    "pacjent cierpi na zaburzenia odżywiania w istotny sposób zaburzające codzienną dietę",
                    "pacjent nie przestrzega zaleceń lekarskich co do diety",
                    "dieta zgodna z wyznawaną religią i światopoglądem",
                  ]}
                />
                <FormField
                  name="diet"
                  onChangeText={handleChange("diet")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("diet")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Wywiad od rodziny</Text>
                <FormField
                  name="family_interview"
                  onChangeText={handleChange("family_interview")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("family_interview")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <AppButton
                  buttonType="solid"
                  icon="next_btn"
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
    borderTopRightRadius: 50,
    paddingTop: 22,
    paddingBottom: 22,
  },
  buttonContainer: {
    margin: 25,
  },
  titleText: {
    marginLeft: 30,
    marginBottom: 20,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  subtitleText: {
    color: Colors.PURPLE,
    marginLeft: 30,
    paddingTop: 10,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  listItemFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 50,
    marginRight: 20,
    paddingTop: 7,
  },
  nestedListItemFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 70,
    paddingTop: 7,
  },
  commentFieldText: {
    flex: 1,
    color: Colors.PURPLE,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    alignSelf: "flex-start",
    marginLeft: 50,
    marginRight: 20,
    paddingTop: 7,
  },
});

BasicDataScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patient: Patient.isRequired,
    }),
  }).isRequired,
};

export default BasicDataScreen;
