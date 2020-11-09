import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import FormField from "./fields/FormField";
import Select from "./fields/Select";
import MultiChoice from "./fields/MultiChoice";
import PastPsychiatricTreatment from "./fields/PastPsychiatricTreatment";
import FillForm from "./fields/FillForm";
import RadioButton from "./fields/RadioButton";
import formStyles from "../../constants/styles/formStyles";

const BasicDataForm = ({ handleChange, handleBlur, values }) => {
  return (
    <>
      <Text style={styles.subtitleText}>Powód i kontekst zgłoszenia</Text>
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
      <Select
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
      <Text style={styles.subtitleText}>Przebyte choroby i operacje</Text>
      <MultiChoice
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
      <Text style={styles.subtitleText}>Przebieg dotychczasowego leczenia</Text>
      <Text style={styles.listItemFieldText}>
        W przeszłości pacjent {"  "}_____{"  "} psychiatrycznie
      </Text>
      <PastPsychiatricTreatment
        name="past_psychiatric_treatment"
        leftText="leczył się"
        rightText="nie leczył się"
      />
      <FillForm
        name="first_hospitalization"
        onChangeText={handleChange("first_hospitalization")}
        placeholder="rok"
        labelText="Pierwszy raz przyjęty w:"
        onBlur={handleBlur("first_hospitalization")}
        keyboardType="numeric"
        editable={values.past_psychiatric_treatment !== false}
      />
      <FillForm
        name="hospitalization_times"
        onChangeText={handleChange("hospitalization_times")}
        placeholder={values.past_psychiatric_treatment ? "ilość razy" : "0"}
        labelText="Liczba hospitalizacji:      "
        onBlur={handleBlur("hospitalization_times")}
        keyboardType="numeric"
        editable={values.past_psychiatric_treatment !== false}
        value={values.past_psychiatric_treatment === false ? "0" : null}
      />
      <Text style={styles.listItemFieldText}>{"> "} farmakoterapia</Text>
      <FormField
        name="pharmacotherapy"
        onChangeText={handleChange("pharmacotherapy")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("pharmacotherapy")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.listItemFieldText}>{"> "} psychoterapia</Text>
      <FormField
        name="psychotherapy"
        onChangeText={handleChange("psychotherapy")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("psychotherapy")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.listItemFieldText}>{"> "} terapia rodzin</Text>
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
        name="medications"
        onChangeText={handleChange("medications")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("medications")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.subtitleText}>Uczulenia i osobnicze reakcje</Text>
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
      <Text style={styles.listItemFieldText}>{"> "} poziom wykształcenia</Text>
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
      <Text style={styles.listItemFieldText}>{"> "} status zawodowy</Text>
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
      <Select name="social_assistance_choice" leftText="tak" rightText="nie" />
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
      <Text style={styles.subtitleText}>Wywiad rodzinny i rozwojowy</Text>
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
      <Text style={styles.listItemFieldText}>{"> "} sytuacja rodzinna</Text>
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
        {"> "} relacje rodzinne z uwzględnieniem więzi i obszarów konfliktowych
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
        (w tym zwłaszcza chorobami psychicznymi, uzależnieniami, myślami i
        tendencjami suicydalnymi lub homicydalnymi)
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
    </>
  );
};

const styles = formStyles;

BasicDataForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    past_psychiatric_treatment: PropTypes.bool.isRequired,
  }).isRequired,
};
export default BasicDataForm;
