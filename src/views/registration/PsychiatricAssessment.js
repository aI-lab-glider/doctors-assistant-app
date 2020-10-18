import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Colors, Typography } from "../../constants/styles";
import { PsychiatricAssessmentContext } from "../../modules/context/PsychiatricAssessmentContext";
import FormField from "../../components/forms/FormField";
import AppButton from "../../components/common/AppButton";
import psychiatricAssessmentValidationSchema from "../../constants/validationSchemas/psychiatricAssessmentValidationSchema";
import SelectFormField from "../../components/forms/SelectFormField";
import MultiChoiceFormField from "../../components/forms/MultiChoiceFormField";
import RadioButton from "../../components/forms/RadioButton";
import CheckboxFormField from "../../components/forms/CheckboxFormField";

const PsychiatricAssessment = ({ route, navigation }) => {
  const { patientId } = route.params;
  const { setPsychiatricAssessment } = useContext(PsychiatricAssessmentContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const psychiatricAssessment = {
    patient_id: patientId,
    general_appearance: "",
    outfit_choice: "",
    appearance_care: "",
    unusual_features_gestures: "",
    agree_examination_choice: null,
    agree_examination: "",
    trusting_choice: null,
    trusting: "",
    aggressive_choice: null,
    aggressive: "",
    distance_shorten_choice: null,
    distance_shorten: "",
    sexualizing_contact_choice: null,
    sexualizing_contact: "",
    irritated_easily_choice: null,
    irritated_easily: "",
    fear_cause_choice: null,
    fear_cause: "",
    irritate_choice: null,
    irritate: "",
    autopsychic_orientation_choice: null,
    autopsychic_orientation: "",
    allopsychic_orientation_choice: null,
    allopsychic_orientation: "",
    answer_questions_choice: "",
    answer_questions: "",
    accent_difficulties: null,
    accent: "",
    dialect_difficulties: null,
    dialect: "",
    speech_speed_difficulties: null,
    speech_speed: "",
    speech_tone_difficulties: null,
    speech_tone: "",
    speech_impairment_difficulties: null,
    speech_impairment: "",
    aphasia_features_difficulties: null,
    aphasia_features: "",
    moving_way_choice: "",
    moving_way: "",
    attention_disorders_choice: "",
    attention_disorders: "",
    memory_impairment_choice: "",
    memory_impairment: "",
    mood_choice: "",
    mood: "",
    psychomotor_drive_choice: "",
    psychomotor_drive: "",
    affect_choice: "",
    affect: "",
    anxiety_choice: "",
    anxiety: "",
    delusions_choice: "",
    delusions: "",
    hallucinations_choice: "",
    hallucinations: "",
    illusions_choice: "",
    illusions: "",
    perception_disorders_choice: "",
    perception_disorders: "",
    abnormal_thinking_choice: "",
    abnormal_thinking: "",
    criticism_disturbance_choice: "",
    criticism_disturbance: "",
    complex_activity_choice: "",
    complex_activity: "",
    catatonic_parakinesis_choice: "",
    catatonic_parakinesis: "",
    memorizing_difficulties: null,
    memorizing: "",
    attention_counting_difficulties: null,
    attention_counting: "",
    reminding_difficulties: null,
    reminding: "",
    language_skills_difficulties: null,
    language_skills: "",
    resignation_thoughts_choice: null,
    resignation_thoughts: "",
    suicide_thoughts_choice: null,
    suicide_thoughts: "",
    suicidal_plans_choice: null,
    suicidal_plans: "",
    murder_fantasies_choice: null,
    murder_fantasies: "",
    murder_plans_choice: null,
    murder_plans: "",
  };

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    psychiatricAssessment.general_appearance = values.general_appearance;
    psychiatricAssessment.outfit_choice = values.outfit_choice;
    psychiatricAssessment.appearance_care = values.appearance_care;
    psychiatricAssessment.unusual_features_gestures =
      values.unusual_features_gestures;
    psychiatricAssessment.agree_examination_choice =
      values.agree_examination_choice;
    psychiatricAssessment.agree_examination = values.agree_examination;
    psychiatricAssessment.trusting_choice = values.trusting_choice;
    psychiatricAssessment.trusting = values.trusting;
    psychiatricAssessment.aggressive_choice = values.aggressive_choice;
    psychiatricAssessment.aggressive = values.aggressive;
    psychiatricAssessment.distance_shorten_choice =
      values.distance_shorten_choice;
    psychiatricAssessment.distance_shorten = values.distance_shorten;
    psychiatricAssessment.sexualizing_contact_choice =
      values.sexualizing_contact_choice;
    psychiatricAssessment.sexualizing_contact = values.sexualizing_contact;
    psychiatricAssessment.irritated_easily_choice =
      values.irritated_easily_choice;
    psychiatricAssessment.irritated_easily = values.irritated_easily;
    psychiatricAssessment.fear_cause_choice = values.fear_cause_choice;
    psychiatricAssessment.fear_cause = values.fear_cause;
    psychiatricAssessment.irritate_choice = values.irritate_choice;
    psychiatricAssessment.irritate = values.irritate;
    psychiatricAssessment.autopsychic_orientation_choice =
      values.autopsychic_orientation_choice;
    psychiatricAssessment.autopsychic_orientation =
      values.autopsychic_orientation;
    psychiatricAssessment.allopsychic_orientation_choice =
      values.allopsychic_orientation_choice;
    psychiatricAssessment.allopsychic_orientation =
      values.allopsychic_orientation;
    psychiatricAssessment.answer_questions_choice =
      values.answer_questions_choice;
    psychiatricAssessment.answer_questions = values.answer_questions;
    psychiatricAssessment.accent_difficulties = values.accent_difficulties;
    psychiatricAssessment.accent = values.accent;
    psychiatricAssessment.dialect_difficulties = values.dialect_difficulties;
    psychiatricAssessment.dialect = values.dialect;
    psychiatricAssessment.speech_speed_difficulties =
      values.speech_speed_difficulties;
    psychiatricAssessment.speech_speed = values.speech_speed;
    psychiatricAssessment.speech_tone_difficulties =
      values.speech_tone_difficulties;
    psychiatricAssessment.speech_tone = values.speech_tone;
    psychiatricAssessment.speech_impairment_difficulties =
      values.speech_impairment_difficulties;
    psychiatricAssessment.speech_impairment = values.speech_impairment;
    psychiatricAssessment.aphasia_features_difficulties =
      values.aphasia_features_difficulties;
    psychiatricAssessment.aphasia_features = values.aphasia_features;
    psychiatricAssessment.moving_way_choice = values.moving_way_choice;
    psychiatricAssessment.moving_way = values.moving_way;
    psychiatricAssessment.attention_disorders_choice =
      values.attention_disorders_choice;
    psychiatricAssessment.attention_disorders = values.attention_disorders;
    psychiatricAssessment.memory_impairment_choice =
      values.memory_impairment_choice;
    psychiatricAssessment.memory_impairment = values.memory_impairment;
    psychiatricAssessment.mood_choice = values.mood_choice;
    psychiatricAssessment.mood = values.mood;
    psychiatricAssessment.psychomotor_drive_choice =
      values.psychomotor_drive_choice;
    psychiatricAssessment.psychomotor_drive = values.psychomotor_drive;
    psychiatricAssessment.affect_choice = values.affect_choice;
    psychiatricAssessment.affect = values.affect;
    psychiatricAssessment.anxiety_choice = values.anxiety_choice;
    psychiatricAssessment.anxiety = values.anxiety;
    psychiatricAssessment.delusions_choice = values.delusions_choice;
    psychiatricAssessment.delusions = values.delusions;
    psychiatricAssessment.hallucinations_choice = values.hallucinations_choice;
    psychiatricAssessment.hallucinations = values.hallucinations;
    psychiatricAssessment.illusions_choice = values.illusions_choice;
    psychiatricAssessment.illusions = values.illusions;
    psychiatricAssessment.perception_disorders_choice =
      values.perception_disorders_choice;
    psychiatricAssessment.perception_disorders = values.perception_disorders;
    psychiatricAssessment.abnormal_thinking_choice =
      values.abnormal_thinking_choice;
    psychiatricAssessment.abnormal_thinking = values.abnormal_thinking;
    psychiatricAssessment.criticism_disturbance_choice =
      values.criticism_disturbance_choice;
    psychiatricAssessment.criticism_disturbance = values.criticism_disturbance;
    psychiatricAssessment.complex_activity_choice =
      values.complex_activity_choice;
    psychiatricAssessment.complex_activity = values.complex_activity;
    psychiatricAssessment.catatonic_parakinesis_choice =
      values.catatonic_parakinesis_choice;
    psychiatricAssessment.catatonic_parakinesis = values.catatonic_parakinesis;
    psychiatricAssessment.memorizing_difficulties =
      values.memorizing_difficulties;
    psychiatricAssessment.memorizing = values.memorizing;
    psychiatricAssessment.attention_counting_difficulties =
      values.attention_counting_difficulties;
    psychiatricAssessment.attention_counting = values.attention_counting;
    psychiatricAssessment.reminding_difficulties =
      values.reminding_difficulties;
    psychiatricAssessment.reminding = values.reminding;
    psychiatricAssessment.language_skills_difficulties =
      values.language_skills_difficulties;
    psychiatricAssessment.language_skills = values.language_skills;
    psychiatricAssessment.resignation_thoughts_choice =
      values.resignation_thoughts_choice;
    psychiatricAssessment.resignation_thoughts = values.resignation_thoughts;
    psychiatricAssessment.suicide_thoughts_choice =
      values.suicide_thoughts_choice;
    psychiatricAssessment.suicide_thoughts = values.suicide_thoughts;
    psychiatricAssessment.suicidal_plans_choice = values.suicidal_plans_choice;
    psychiatricAssessment.suicidal_plans = values.suicidal_plans;
    psychiatricAssessment.murder_fantasies_choice =
      values.murder_fantasies_choice;
    psychiatricAssessment.murder_fantasies = values.murder_fantasies;
    psychiatricAssessment.murder_plans_choice = values.murder_plans_choice;
    psychiatricAssessment.murder_plans = values.murder_plans;
    psychiatricAssessment.id = await setPsychiatricAssessment(
      psychiatricAssessment
    );
    if (psychiatricAssessment.id) {
      navigation.navigate("PatientsList");
    }
    // TODO: Show alert with info what is wrong
  };
  return (
    <KeyboardAvoidingView style={styles.backgroundContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Formik
            initialValues={psychiatricAssessment}
            enableReinitialize
            validationSchema={psychiatricAssessmentValidationSchema}
            onSubmit={(values) => onButtonPressed(values)}
          >
            {({
              handleChange,
              handleSubmit,
              isValid,
              handleBlur,
              isSubmitting,
            }) => (
              <>
                <Text style={styles.subtitleText}>Wygląd</Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} ogólny wygląd badanego
                </Text>
                <FormField
                  name="general_appearance"
                  onChangeText={handleChange("general_appearance")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("general_appearance")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} strój</Text>
                <MultiChoiceFormField
                  name="outfit_choice"
                  options={[
                    "bez istotnych cech charaktery­stycznych (adekwatny, zadbany, czysty, schludny)",
                    "nieadekwatny",
                    "zaniedbany",
                    "nadmiernie wyrazisty, kolorowy",
                  ]}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} stopień zadbania o wygląd
                </Text>
                <FormField
                  name="appearance_care"
                  onChangeText={handleChange("appearance_care")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("appearance_care")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} wszystkie niezwykłe cechy lub gesty
                </Text>
                <FormField
                  name="unusual_features_gestures"
                  onChangeText={handleChange("unusual_features_gestures")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("unusual_features_gestures")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Relacja z badającym</Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} czy chętnie zgadza się na badanie?
                </Text>
                <SelectFormField
                  name="agree_examination_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="agree_examination"
                  onChangeText={handleChange("agree_examination")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("agree_examination")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} czy jest ufny?
                </Text>
                <SelectFormField
                  name="trusting_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="trusting"
                  onChangeText={handleChange("trusting")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("trusting")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} czy jest agresywny?
                </Text>
                <SelectFormField
                  name="aggressive_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="aggressive"
                  onChangeText={handleChange("aggressive")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("aggressive")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} czy skraca dystans?
                </Text>
                <SelectFormField
                  name="distance_shorten_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="distance_shorten"
                  onChangeText={handleChange("distance_shorten")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("distance_shorten")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} czy seksualizuje kontakt?
                </Text>
                <SelectFormField
                  name="sexualizing_contact_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="sexualizing_contact"
                  onChangeText={handleChange("sexualizing_contact")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("sexualizing_contact")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} czy łatwo się irytuje?
                </Text>
                <SelectFormField
                  name="irritated_easily_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="irritated_easily"
                  onChangeText={handleChange("irritated_easily")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("irritated_easily")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} czy wzbudza lęk?
                </Text>
                <SelectFormField
                  name="fear_cause_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="fear_cause"
                  onChangeText={handleChange("fear_cause")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("fear_cause")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} czy wzbudza irytację?
                </Text>
                <SelectFormField
                  name="irritate_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="irritate"
                  onChangeText={handleChange("irritate")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("irritate")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Orientacja</Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} zachowana orientacja autopsychiczna
                </Text>
                <SelectFormField
                  name="autopsychic_orientation_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="autopsychic_orientation"
                  onChangeText={handleChange("autopsychic_orientation")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("autopsychic_orientation")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} zachowana orientacja allopsychiczna
                </Text>
                <SelectFormField
                  name="allopsychic_orientation_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="allopsychic_orientation"
                  onChangeText={handleChange("allopsychic_orientation")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("allopsychic_orientation")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Sposób odpowiadania na pytania
                </Text>
                <MultiChoiceFormField
                  name="answer_questions_choice"
                  options={[
                    "bez uchwytnych trudności poznawczych",
                    "trudności w rozumieniu pytań",
                    "odpowiedzi zdawkowe",
                    "odpowiedzi wyczerpujące",
                    "pamięć prawidłowa",
                    "trudność w przypominaniu faktów",
                  ]}
                />
                <FormField
                  name="answer_questions"
                  onChangeText={handleChange("answer_questions")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("answer_questions")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Mowa</Text>
                <Text style={styles.listItemFieldText}>{"> "} akcent</Text>
                <CheckboxFormField
                  name="accent_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="accent"
                  onChangeText={handleChange("accent")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("accent")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} dialekt</Text>
                <CheckboxFormField
                  name="dialect_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="dialect"
                  onChangeText={handleChange("dialect")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("dialect")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} szybkość mowy
                </Text>
                <CheckboxFormField
                  name="speech_speed_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="speech_speed"
                  onChangeText={handleChange("speech_speed")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("speech_speed")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} ton mowy</Text>
                <CheckboxFormField
                  name="speech_tone_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="speech_tone"
                  onChangeText={handleChange("speech_tone")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("speech_tone")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} upośledzenia mowy
                </Text>
                <CheckboxFormField
                  name="speech_impairment_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="speech_impairment"
                  onChangeText={handleChange("speech_impairment")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("speech_impairment")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} cechy afazji
                </Text>
                <CheckboxFormField
                  name="aphasia_features_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="aphasia_features"
                  onChangeText={handleChange("aphasia_features")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("aphasia_features")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Sposób poruszania się, przyjmowane pozy
                </Text>
                <MultiChoiceFormField
                  name="moving_way_choice"
                  options={[
                    "manieryzmy",
                    "pobudzenie",
                    "zahamowanie psychoruchowe",
                  ]}
                />
                <FormField
                  name="moving_way"
                  onChangeText={handleChange("moving_way")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("moving_way")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Zaburzenia uwagi</Text>
                <RadioButton
                  name="attention_disorders_choice"
                  options={[
                    "nie stwierdza się",
                    "zaburzenia koncentracji uwagi",
                    "poważne zaburzenia koncentra­cji uwagi",
                  ]}
                />
                <FormField
                  name="attention_disorders"
                  onChangeText={handleChange("attention_disorders")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("attention_disorders")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Zaburzenia pamięci</Text>
                <MultiChoiceFormField
                  name="memory_impairment_choice"
                  options={[
                    "nie stwierdza się",
                    "znaczne zaburzenia pamięci",
                    "nasilone zaburzenia pamięci",
                    "zaburzenia zapamiętywania",
                    "zaburzenia pamięci świeżej",
                    "zaburzenia pamięci dawnej",
                  ]}
                />
                <FormField
                  name="memory_impairment"
                  onChangeText={handleChange("memory_impairment")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("memory_impairment")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Nastrój</Text>
                <RadioButton
                  name="mood_choice"
                  options={[
                    "wyrównany",
                    "nieznacznie obniżony",
                    "obniżony",
                    "znacznie obniżony",
                    "nieznacznie podwyższony",
                    "podwyższony",
                    "znacznie podwyższony",
                    "dysforyczny",
                  ]}
                />
                <FormField
                  name="mood"
                  onChangeText={handleChange("mood")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("mood")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Napęd psychoruchowy</Text>
                <RadioButton
                  name="psychomotor_drive_choice"
                  options={[
                    "wyrównany",
                    "nieznacznie obniżony",
                    "obniżony",
                    "znacznie obniżony",
                    "nieznacznie podwyższony",
                    "podwyższony",
                    "znacznie podwyższony",
                  ]}
                />
                <FormField
                  name="psychomotor_drive"
                  onChangeText={handleChange("psychomotor_drive")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("psychomotor_drive")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Afekt</Text>
                <MultiChoiceFormField
                  name="affect_choice"
                  options={[
                    "dostosowany",
                    "niedostosowany",
                    "żywy/prawidłowo modulowany",
                    "blady",
                    "stępiały",
                    "płaski",
                    "labilny",
                  ]}
                />
                <FormField
                  name="affect"
                  onChangeText={handleChange("affect")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("affect")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Lęk</Text>
                <Text style={styles.listItemFieldText}>{"> "} niepokój</Text>
                <MultiChoiceFormField
                  name="anxiety_choice"
                  options={[
                    "nie stwierdza się",
                    "lęk wolno płynący",
                    "lęk napadowy",
                    "lęk fobijny",
                    "somatyczne objawy lęku",
                    "zaznaczony niepokój psycho­ruchowy",
                  ]}
                />
                <FormField
                  name="anxiety"
                  onChangeText={handleChange("anxiety")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("anxiety")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Zaburzenia treści myślenia
                </Text>
                <Text style={styles.listItemFieldText}>{"> "} urojenia</Text>
                <MultiChoiceFormField
                  name="delusions_choice"
                  options={[
                    "nie stwierdza się",
                    "winy i grzeszności",
                    "niższości",
                    "zubożenia",
                    "nihilistyczne",
                    "hipochondryczne",
                    "owładnięcia",
                    "kontroli",
                    "oddziaływania (wpływu)",
                    "nasyłanie myśli",
                    "odciąganie (zabieranie) myśli",
                    "rozgłaśnianie (odsłonięcie) myśli",
                    "wielkościowe",
                    "odnoszące (ksobne)",
                    "prześladowcze",
                    "niewierności małżeńskiej",
                    "urojeniowa zazdrość",
                    "erotyczne, zakochania",
                    "religijne i posłannicze",
                    "natręctwa (obsesje)",
                    "idee nadwartościowe",
                  ]}
                />
                <FormField
                  name="delusions"
                  onChangeText={handleChange("delusions")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("delusions")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Zaburzenia spostrzegania
                </Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} halucynacje, pseudohalucyjnacje
                </Text>
                <MultiChoiceFormField
                  name="hallucinations_choice"
                  options={[
                    "nie stwierdza się",
                    "słuchowe",
                    "głosy komentujące",
                    "głosy prowadzące dialog",
                    "ugłośnienie myśli",
                    "echo myśli",
                    "wzrokowe",
                    "fotopsje",
                    "węchowe",
                    "dotykowe",
                    "smakowe",
                    "czucia ustrojowego",
                    "parahalucynacje (halucynoidy)",
                    "hipnagogiczne",
                    "hipnapompiczne",
                    "depersonalizacje",
                    "derealizacje",
                  ]}
                />
                <FormField
                  name="hallucinations"
                  onChangeText={handleChange("hallucinations")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("hallucinations")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} iluzje</Text>
                <MultiChoiceFormField
                  name="illusions_choice"
                  options={[
                    "nie stwierdza się",
                    "słuchowe",
                    "wzrokowe",
                    "węchowe",
                    "dotykowe",
                    "smakowe",
                    "czucia ustrojowego",
                  ]}
                />
                <FormField
                  name="illusions"
                  onChangeText={handleChange("illusions")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("illusions")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} inne</Text>
                <MultiChoiceFormField
                  name="perception_disorders_choice"
                  options={[
                    "nie stwierdza się",
                    "pareidolie",
                    "makropsje",
                    "mikropsje",
                  ]}
                />
                <FormField
                  name="perception_disorders"
                  onChangeText={handleChange("perception_disorders")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("perception_disorders")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Zaburzenia toku myślenia
                </Text>
                <MultiChoiceFormField
                  name="abnormal_thinking_choice"
                  options={[
                    "nie stwierdza się",
                    "przyspieszenie",
                    "spowolnienie",
                    "otamowanie",
                    "niedokojarzenie",
                    "rozkojarzenie",
                    "splątanie",
                    "perseweracje",
                    "werbigeracje",
                    "ambiwalencja",
                    "zorientowany na cela badania",
                    "dygresyjny",
                    "nadmiernie szczegółowy",
                    "zahamowania",
                    "echolalie",
                    "gonitwa myśli",
                    "dezorganizacja myślenia",
                  ]}
                />
                <FormField
                  name="abnormal_thinking"
                  onChangeText={handleChange("abnormal_thinking")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("abnormal_thinking")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Zaburzenia krytycyzmu i wyglądu
                </Text>
                <MultiChoiceFormField
                  name="criticism_disturbance_choice"
                  options={[
                    "zachowany wgląd i krytycyzm",
                    "częściowo zachowany wgląd i krytycyzm",
                    "brak wglądu i bezkrytycyzm",
                    "ego-dystoniczny charakter objawów",
                    "ego-syntoniczny charakter objawów",
                  ]}
                />
                <FormField
                  name="criticism_disturbance"
                  onChangeText={handleChange("criticism_disturbance")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("criticism_disturbance")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Aktywność złożona</Text>
                <MultiChoiceFormField
                  name="complex_activity_choice"
                  options={[
                    "natrętne czynności (kompulsje)",
                    "automatyzmy",
                    "stereotypie",
                    "manieryzmy",
                  ]}
                />
                <FormField
                  name="complex_activity"
                  onChangeText={handleChange("complex_activity")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("complex_activity")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Parakinezy katatoniczne</Text>
                <MultiChoiceFormField
                  name="catatonic_parakinesis_choice"
                  options={[
                    "zastyganie",
                    "stupor",
                    "gibkość woskowa",
                    "negatywizm czynny",
                    "negatywizm bierny",
                    "sztywność",
                  ]}
                />
                <FormField
                  name="catatonic_parakinesis"
                  onChangeText={handleChange("catatonic_parakinesis")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("catatonic_parakinesis")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Ocena pozostałych funkcji poznawczych
                </Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} zapamiętywanie
                </Text>
                <Text style={styles.commentFieldText}>
                  (w wypadku podejrzenia otępienia)
                </Text>
                <CheckboxFormField
                  name="memorizing_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="memorizing"
                  onChangeText={handleChange("memorizing")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("memorizing")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} uwaga i liczenie
                </Text>
                <Text style={styles.commentFieldText}>
                  (w wypadku podejrzenia otępienia)
                </Text>
                <CheckboxFormField
                  name="attention_counting_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="attention_counting"
                  onChangeText={handleChange("attention_counting")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("attention_counting")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} przypominanie
                </Text>
                <Text style={styles.commentFieldText}>
                  (w wypadku podejrzenia otępienia)
                </Text>
                <CheckboxFormField
                  name="reminding_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="reminding"
                  onChangeText={handleChange("reminding")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("reminding")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} zdolności językowe
                </Text>
                <Text style={styles.commentFieldText}>
                  (w wypadku podejrzenia otępienia)
                </Text>
                <CheckboxFormField
                  name="language_skills_difficulties"
                  text="bez uchwytnych trudności"
                  style={styles.choice}
                />
                <FormField
                  name="language_skills"
                  onChangeText={handleChange("language_skills")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("language_skills")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>
                  Myśli i plany suicydalne lub homicydalne
                </Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} myśli rezygnacyjne
                </Text>
                <SelectFormField
                  name="resignation_thoughts_choice"
                  leftText="obecne"
                  rightText="nieobecne"
                />
                <FormField
                  name="resignation_thoughts"
                  onChangeText={handleChange("resignation_thoughts")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("resignation_thoughts")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} myśli samobójcze
                </Text>
                <SelectFormField
                  name="suicide_thoughts_choice"
                  leftText="obecne"
                  rightText="nieobecne"
                />
                <FormField
                  name="suicide_thoughts"
                  onChangeText={handleChange("suicide_thoughts")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("suicide_thoughts")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} plany i tendencje samobójcze
                </Text>
                <SelectFormField
                  name="suicidal_plans_choice"
                  leftText="obecne"
                  rightText="nieobecne"
                />
                <FormField
                  name="suicidal_plans"
                  onChangeText={handleChange("suicidal_plans")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("suicidal_plans")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} fantazje o zabójstwie
                </Text>
                <SelectFormField
                  name="murder_fantasies_choice"
                  leftText="obecne"
                  rightText="nieobecne"
                />
                <FormField
                  name="murder_fantasies"
                  onChangeText={handleChange("murder_fantasies")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("murder_fantasies")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} plany zabójstwa
                </Text>
                <SelectFormField
                  name="murder_plans_choice"
                  leftText="obecne"
                  rightText="nieobecne"
                />
                <FormField
                  name="murder_plans"
                  onChangeText={handleChange("murder_plans")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("murder_plans")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <AppButton
                  buttonType="solid"
                  icon="next_btn"
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting || isNextButtonDisabled}
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
    paddingTop: 15,
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
  choice: {
    marginRight: 15,
    marginLeft: 60,
  },
});

PsychiatricAssessment.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number,
    }),
  }).isRequired,
};

export default PsychiatricAssessment;
