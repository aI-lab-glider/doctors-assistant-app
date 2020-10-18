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
import { PhysicalExaminationContext } from "../../modules/context/PhysicalExaminationContext";
import FormField from "../../components/forms/FormField";
import AppButton from "../../components/common/AppButton";
import physicalExaminationValidationSchema from "../../constants/validationSchemas/physicalExaminationValidationSchema";
import SelectFormField from "../../components/forms/SelectFormField";
import MultiChoiceFormField from "../../components/forms/MultiChoiceFormField";
import RadioButton from "../../components/forms/RadioButton";
import CheckboxFormField from "../../components/forms/CheckboxFormField";

const PhysicalExaminationScreen = ({ route, navigation }) => {
  const { patientId } = route.params;
  const { setPhysicalExamination } = useContext(PhysicalExaminationContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const physicalExamination = {
    patient_id: patientId,
    general_conditions: "dobry",
    blood_pressure: "",
    pulse: "",
    body_temperature: "",
    body_build_type: "normosteniczna",
    skin_appearance: "",
    skin_colour: "",
    skin_humidity: "",
    skin_swelling: "",
    skin_scars: "",
    lymphatic_gland_examined: false,
    head_appearance_choice: false,
    head_appearance: "",
    head_percussion_tenderness: "",
    head_eyeballs: "",
    ears: "",
    nose: "",
    mouth_teeth: "uporządkowane",
    mucous_membrane_choice: "",
    mucous_membrane: "",
    neck_throat_tonsil: "",
    neck_appearance: "",
    neck_thyroid_choice: "",
    neck_thyroid: "",
    chest_choice: "",
    chest: "",
    breath_frequency: "",
    chest_percussion_choice: "",
    chest_percussion: "",
    chest_auscultation_choice: false,
    chest_auscultation: "",
    cardiovascular_appearance: "",
    cardiovascular_efficient: "",
    cardiovascular_auscultation: "",
    cardiovascular_pulse_choice: null,
    cardiovascular_pulse: "",
    stomach: "wysklepiony w poziomie klp",
    stomach_hernia: "",
    stomach_painless: "",
    stomach_auscultation: "",
    stomach_percussion: "",
    stomach_physical_examination: "",
    stomach_symptoms: "",
    legs_swelling: "",
    legs_veins: "",
    locomotor_joint_outline: true,
    locomotor_limb_mobility: true,
    muscle_strength_tension: true,
    nervous_meningeal_signs: "",
    nervous_focal_damage: "",
  };

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    physicalExamination.general_conditions = values.general_conditions;
    physicalExamination.blood_pressure = values.blood_pressure;
    physicalExamination.pulse = values.pulse;
    physicalExamination.body_temperature = values.body_temperature;
    physicalExamination.body_build_type = values.body_build_type;
    physicalExamination.skin_appearance = values.skin_appearance;
    physicalExamination.skin_colour = values.skin_colour;
    physicalExamination.skin_humidity = values.skin_humidity;
    physicalExamination.skin_swelling = values.skin_swelling;
    physicalExamination.skin_scars = values.skin_scars;
    physicalExamination.lymphatic_gland_examined =
      values.lymphatic_gland_examined;
    physicalExamination.head_appearance_choice = values.head_appearance_choice;
    physicalExamination.head_appearance = values.head_appearance;
    physicalExamination.head_percussion_tenderness =
      values.head_percussion_tenderness;
    physicalExamination.head_eyeballs = values.head_eyeballs;
    physicalExamination.ears = values.ears;
    physicalExamination.nose = values.nose;
    physicalExamination.mouth_teeth = values.mouth_teeth;
    physicalExamination.mucous_membrane_choice = values.mucous_membrane_choice;
    physicalExamination.mucous_membrane = values.mucous_membrane;
    physicalExamination.neck_throat_tonsil = values.neck_throat_tonsil;
    physicalExamination.neck_appearance = values.neck_appearance;
    physicalExamination.neck_thyroid_choice = values.neck_thyroid_choice;
    physicalExamination.neck_thyroid = values.neck_thyroid;
    physicalExamination.chest_choice = values.chest_choice;
    physicalExamination.chest = values.chest;
    physicalExamination.breath_frequency = values.breath_frequency;
    physicalExamination.chest_percussion_choice =
      values.chest_percussion_choice;
    physicalExamination.chest_percussion = values.chest_percussion;
    physicalExamination.chest_auscultation_choice =
      values.chest_auscultation_choice;
    physicalExamination.chest_auscultation = values.chest_auscultation;
    physicalExamination.cardiovascular_appearance =
      values.cardiovascular_appearance;
    physicalExamination.cardiovascular_efficient =
      values.cardiovascular_efficient;
    physicalExamination.cardiovascular_auscultation =
      values.cardiovascular_auscultation;
    physicalExamination.cardiovascular_pulse_choice =
      values.cardiovascular_pulse_choice;
    physicalExamination.cardiovascular_pulse = values.cardiovascular_pulse;
    physicalExamination.stomach = values.stomach;
    physicalExamination.stomach_hernia = values.stomach_hernia;
    physicalExamination.stomach_painless = values.stomach_painless;
    physicalExamination.stomach_auscultation = values.stomach_auscultation;
    physicalExamination.stomach_percussion = values.stomach_percussion;
    physicalExamination.stomach_physical_examination =
      values.stomach_physical_examination;
    physicalExamination.stomach_symptoms = values.stomach_symptoms;
    physicalExamination.legs_swelling = values.legs_swelling;
    physicalExamination.legs_veins = values.legs_veins;
    physicalExamination.locomotor_joint_outline =
      values.locomotor_joint_outline;
    physicalExamination.locomotor_limb_mobility =
      values.locomotor_limb_mobility;
    physicalExamination.muscle_strength_tension =
      values.muscle_strength_tension;
    physicalExamination.nervous_meningeal_signs =
      values.nervous_meningeal_signs;
    physicalExamination.nervous_focal_damage = values.nervous_focal_damage;
    physicalExamination.id = await setPhysicalExamination(physicalExamination);
    if (physicalExamination.id) {
      navigation.navigate("PsychiatricAssessment", {
        patientId,
      });
    }
    // TODO: Show alert with info what is wrong
  };

  return (
    <KeyboardAvoidingView style={styles.backgroundContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Formik
            initialValues={physicalExamination}
            enableReinitialize
            validationSchema={physicalExaminationValidationSchema}
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
                <Text style={styles.subtitleText}>Stan ogólny</Text>
                <RadioButton
                  name="general_conditions"
                  options={["dobry", "średni", "ciężki"]}
                  defaultOptionIndex={0}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} ciśnienie tętnicze
                </Text>
                <FormField
                  name="blood_pressure"
                  onChangeText={handleChange("blood_pressure")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("blood_pressure")}
                  keyboardType="phone-pad"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} tętno</Text>
                <FormField
                  name="pulse"
                  onChangeText={handleChange("pulse")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("pulse")}
                  keyboardType="numeric"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} ciepłota ciała
                </Text>
                <FormField
                  name="body_temperature"
                  onChangeText={handleChange("body_temperature")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("body_temperature")}
                  keyboardType="numeric"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Budowa ciała</Text>
                <RadioButton
                  name="body_build_type"
                  options={[
                    "normosteniczna",
                    "hyposteniczna",
                    "hypersteniczna",
                  ]}
                  defaultOptionIndex={0}
                />
                <Text style={styles.subtitleText}>
                  Skóra i tkanka podskórna
                </Text>
                <Text style={styles.listItemFieldText}>{"> "} wygląd</Text>
                <FormField
                  name="skin_appearance"
                  onChangeText={handleChange("skin_appearance")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("skin_appearance")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} barwa</Text>
                <FormField
                  name="skin_colour"
                  onChangeText={handleChange("skin_colour")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("skin_colour")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} wilgotność</Text>
                <FormField
                  name="skin_humidity"
                  onChangeText={handleChange("skin_humidity")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("skin_humidity")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} obrzęki</Text>
                <FormField
                  name="skin_swelling"
                  onChangeText={handleChange("skin_swelling")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("skin_swelling")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} blizny i ślady po samouszkodzeniach
                </Text>
                <FormField
                  name="skin_scars"
                  onChangeText={handleChange("skin_scars")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("skin_scars")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} obwodowe węzły chłonne
                </Text>
                <SelectFormField
                  name="lymphatic_gland_examined"
                  leftText="badalne"
                  rightText="niebadalne"
                  defaultOption={false}
                />
                <Text style={styles.subtitleText}>Głowa</Text>
                <Text style={styles.listItemFieldText}>{"> "} wygląd</Text>
                <CheckboxFormField
                  name="head_appearance_choice"
                  text="wysklepiona symetrycznie, prawidłowo"
                  style={styles.choice}
                />
                <FormField
                  name="head_appearance"
                  onChangeText={handleChange("head_appearance")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("head_appearance")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} bolesność opukowo
                </Text>
                <FormField
                  name="head_percussion_tenderness"
                  onChangeText={handleChange("head_percussion_tenderness")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("head_percussion_tenderness")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} gałki oczne</Text>
                <Text style={styles.commentFieldText}>
                  (osadzenie, ruchomość, źrenice - symetria)
                </Text>
                <FormField
                  name="head_eyeballs"
                  onChangeText={handleChange("head_eyeballs")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("head_eyeballs")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} uszy</Text>
                <FormField
                  name="ears"
                  onChangeText={handleChange("ears")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("ears")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} nos</Text>
                <Text style={styles.commentFieldText}>(drożność, wycieki)</Text>
                <FormField
                  name="nose"
                  onChangeText={handleChange("nose")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("nose")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} jama ustna i uzębienie
                </Text>
                <RadioButton
                  name="mouth_teeth"
                  options={[
                    "nieuporządkowane",
                    "uporządkowane",
                    "zaprotezowane",
                  ]}
                  defaultOptionIndex={1}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} błony śluzowe
                </Text>
                <MultiChoiceFormField
                  name="mucous_membrane_choice"
                  options={["różowe", "wilgotne"]}
                />
                <FormField
                  name="mucous_membrane"
                  onChangeText={handleChange("mucous_membrane")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("mucous_membrane")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} gardło i migdałki
                </Text>
                <FormField
                  name="neck_throat_tonsil"
                  onChangeText={handleChange("neck_throat_tonsil")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("neck_throat_tonsil")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Szyja</Text>
                <Text style={styles.listItemFieldText}>{"> "} wygląd</Text>
                <FormField
                  name="neck_appearance"
                  onChangeText={handleChange("neck_appearance")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("neck_appearance")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} tarczyca</Text>
                <MultiChoiceFormField
                  name="neck_thyroid_choice"
                  options={[
                    "powiększona",
                    "niepowiększona",
                    "ruchoma połykowo",
                  ]}
                />
                <FormField
                  name="neck_thyroid"
                  onChangeText={handleChange("neck_thyroid")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("neck_thyroid")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Klatka piersiowa</Text>
                <MultiChoiceFormField
                  name="chest_choice"
                  options={[
                    "wysklepiona symetrycznie",
                    "wysklepiona niesymetrycznie",
                    "ruchoma oddechowo",
                  ]}
                />
                <FormField
                  name="chest"
                  onChangeText={handleChange("chest")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("chest")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} częstość oddechów/min
                </Text>
                <FormField
                  name="breath_frequency"
                  onChangeText={handleChange("breath_frequency")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("breath_frequency")}
                  keyboardType="numeric"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} opukiwanie</Text>
                <RadioButton
                  name="chest_percussion_choice"
                  options={["wypuk jawny", "wypuk stłumiony"]}
                />
                <FormField
                  name="chest_percussion"
                  onChangeText={handleChange("chest_percussion")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("chest_percussion")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} osłuchiwanie
                </Text>
                <CheckboxFormField
                  name="chest_auscultation_choice"
                  text="nad polami płucnymi osłuchowo szmery oddechowe prawidłowe"
                  style={styles.choice}
                />
                <FormField
                  name="chest_auscultation"
                  onChangeText={handleChange("chest_auscultation")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("chest_auscultation")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Układ krążenia</Text>
                <Text style={styles.listItemFieldText}>{"> "} oglądanie</Text>
                <Text style={styles.commentFieldText}>
                  (tętnienia, uderzenie koniuszkowe)
                </Text>
                <FormField
                  name="cardiovascular_appearance"
                  onChangeText={handleChange("cardiovascular_appearance")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("cardiovascular_appearance")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} wydolny</Text>
                <FormField
                  name="cardiovascular_efficient"
                  onChangeText={handleChange("cardiovascular_efficient")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("cardiovascular_efficient")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} osłuchiwano</Text>
                <Text style={styles.commentFieldText}>
                  (miarowość, tony czyste, bez szmerów patologicznych)
                </Text>
                <FormField
                  name="cardiovascular_auscultation"
                  onChangeText={handleChange("cardiovascular_auscultation")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("cardiovascular_auscultation")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} tętno na tt. promieniowych i grzbietowych stopy zgodne
                  z akcją serca
                </Text>
                <SelectFormField
                  name="cardiovascular_pulse_choice"
                  leftText="tak"
                  rightText="nie"
                />
                <FormField
                  name="cardiovascular_pulse"
                  onChangeText={handleChange("cardiovascular_pulse")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("cardiovascular_pulse")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Brzuch</Text>
                <RadioButton
                  name="stomach"
                  options={[
                    "wysklepiony w poziomie klp",
                    "wysklepiony ponad poziom klp",
                    "poniżej poziomu klp",
                  ]}
                  defaultOptionIndex={0}
                />
                <Text style={styles.listItemFieldText}>{"> "} przepukliny</Text>
                <FormField
                  name="stomach_hernia"
                  onChangeText={handleChange("stomach_hernia")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("stomach_hernia")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} niebolesny</Text>
                <FormField
                  name="stomach_painless"
                  onChangeText={handleChange("stomach_painless")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("stomach_painless")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} osłuchowo perystaltyka
                </Text>
                <FormField
                  name="stomach_auscultation"
                  onChangeText={handleChange("stomach_auscultation")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("stomach_auscultation")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} opukiwanie</Text>
                <FormField
                  name="stomach_percussion"
                  onChangeText={handleChange("stomach_percussion")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("stomach_percussion")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} badanie dotykiem
                </Text>
                <Text style={styles.commentFieldText}>
                  (bez oporów patologicznych, wątroba, śledziona niebadalna)
                </Text>
                <FormField
                  name="stomach_physical_examination"
                  onChangeText={handleChange("stomach_physical_examination")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("stomach_physical_examination")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} objawy</Text>
                <Text style={styles.commentFieldText}>
                  (otrzewnowe, Goldflamma, Chełmońskiego)
                </Text>
                <FormField
                  name="stomach_symptoms"
                  onChangeText={handleChange("stomach_symptoms")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("stomach_symptoms")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Kończyny dolne</Text>
                <Text style={styles.listItemFieldText}>{"> "} obrzęki</Text>
                <FormField
                  name="legs_swelling"
                  onChangeText={handleChange("legs_swelling")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("legs_swelling")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>{"> "} układ żylny</Text>
                <FormField
                  name="legs_veins"
                  onChangeText={handleChange("legs_veins")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("legs_veins")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.subtitleText}>Układ ruchowy</Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} obrysy stawów
                </Text>
                <SelectFormField
                  name="locomotor_joint_outline"
                  leftText="prawidłowe"
                  rightText="nieprawidłowe"
                  defaultOption
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} ruchomość bierna i czynna w stawach kończyn
                </Text>
                <SelectFormField
                  name="locomotor_limb_mobility"
                  leftText="prawidłowe"
                  rightText="nieprawidłowe"
                  defaultOption
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} siła i napięcie mięśniowe
                </Text>
                <SelectFormField
                  name="muscle_strength_tension"
                  leftText="prawidłowe"
                  rightText="nieprawidłowe"
                  defaultOption
                />
                <Text style={styles.subtitleText}>Układ nerwowy</Text>
                <Text style={styles.listItemFieldText}>
                  {"> "} objawy oponowe
                </Text>
                <FormField
                  name="nervous_meningeal_signs"
                  onChangeText={handleChange("nervous_meningeal_signs")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("nervous_meningeal_signs")}
                  keyboardType="default"
                  multiline
                  numberOfLines={2}
                />
                <Text style={styles.listItemFieldText}>
                  {"> "} objawy ogniskowego uszkodzenia systemu nerwowego
                </Text>
                <FormField
                  name="nervous_focal_damage"
                  onChangeText={handleChange("nervous_focal_damage")}
                  placeholder="Miejsce do uzupełnienia"
                  onBlur={handleBlur("nervous_focal_damage")}
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

PhysicalExaminationScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number,
    }),
  }).isRequired,
};

export default PhysicalExaminationScreen;
