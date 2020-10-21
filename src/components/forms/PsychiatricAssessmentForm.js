import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import FormField from "./fields/FormField";
import MultiChoice from "./fields/MultiChoice";
import Select from "./fields/Select";
import CheckboxForm from "./fields/CheckboxForm";
import RadioButton from "./fields/RadioButton";
import formStyles from "../../constants/styles/formStyles";

const PsychiatricAssessmentForm = ({ handleChange, handleBlur }) => {
  return (
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
      <MultiChoice
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
      <Select name="agree_examination_choice" leftText="tak" rightText="nie" />
      <FormField
        name="agree_examination"
        onChangeText={handleChange("agree_examination")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("agree_examination")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy jest ufny?</Text>
      <Select name="trusting_choice" leftText="tak" rightText="nie" />
      <FormField
        name="trusting"
        onChangeText={handleChange("trusting")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("trusting")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy jest agresywny?</Text>
      <Select name="aggressive_choice" leftText="tak" rightText="nie" />
      <FormField
        name="aggressive"
        onChangeText={handleChange("aggressive")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("aggressive")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy skraca dystans?</Text>
      <Select name="distance_shorten_choice" leftText="tak" rightText="nie" />
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
      <Select
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
      <Select name="irritated_easily_choice" leftText="tak" rightText="nie" />
      <FormField
        name="irritated_easily"
        onChangeText={handleChange("irritated_easily")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("irritated_easily")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy wzbudza lęk?</Text>
      <Select name="fear_cause_choice" leftText="tak" rightText="nie" />
      <FormField
        name="fear_cause"
        onChangeText={handleChange("fear_cause")}
        placeholder="Miejsce do uzupełnienia"
        onBlur={handleBlur("fear_cause")}
        keyboardType="default"
        multiline
        numberOfLines={2}
      />
      <Text style={styles.listItemFieldText}>{"> "} czy wzbudza irytację?</Text>
      <Select name="irritate_choice" leftText="tak" rightText="nie" />
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
      <Select
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
      <Select
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
      <Text style={styles.subtitleText}>Sposób odpowiadania na pytania</Text>
      <MultiChoice
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
      <CheckboxForm
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
      <CheckboxForm
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
      <Text style={styles.listItemFieldText}>{"> "} szybkość mowy</Text>
      <CheckboxForm
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
      <CheckboxForm
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
      <Text style={styles.listItemFieldText}>{"> "} upośledzenia mowy</Text>
      <CheckboxForm
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
      <Text style={styles.listItemFieldText}>{"> "} cechy afazji</Text>
      <CheckboxForm
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
      <MultiChoice
        name="moving_way_choice"
        options={["manieryzmy", "pobudzenie", "zahamowanie psychoruchowe"]}
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
      <MultiChoice
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
      <MultiChoice
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
      <MultiChoice
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
      <Text style={styles.subtitleText}>Zaburzenia treści myślenia</Text>
      <Text style={styles.listItemFieldText}>{"> "} urojenia</Text>
      <MultiChoice
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
      <Text style={styles.subtitleText}>Zaburzenia spostrzegania</Text>
      <Text style={styles.listItemFieldText}>
        {"> "} halucynacje, pseudohalucyjnacje
      </Text>
      <MultiChoice
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
      <MultiChoice
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
      <MultiChoice
        name="perception_disorders_choice"
        options={["nie stwierdza się", "pareidolie", "makropsje", "mikropsje"]}
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
      <Text style={styles.subtitleText}>Zaburzenia toku myślenia</Text>
      <MultiChoice
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
      <Text style={styles.subtitleText}>Zaburzenia krytycyzmu i wyglądu</Text>
      <MultiChoice
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
      <MultiChoice
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
      <MultiChoice
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
      <Text style={styles.listItemFieldText}>{"> "} zapamiętywanie</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
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
      <Text style={styles.listItemFieldText}>{"> "} uwaga i liczenie</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
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
      <Text style={styles.listItemFieldText}>{"> "} przypominanie</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
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
      <Text style={styles.listItemFieldText}>{"> "} zdolności językowe</Text>
      <Text style={styles.commentFieldText}>
        (w wypadku podejrzenia otępienia)
      </Text>
      <CheckboxForm
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
      <Text style={styles.listItemFieldText}>{"> "} myśli rezygnacyjne</Text>
      <Select
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
      <Text style={styles.listItemFieldText}>{"> "} myśli samobójcze</Text>
      <Select
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
      <Select
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
      <Text style={styles.listItemFieldText}>{"> "} fantazje o zabójstwie</Text>
      <Select
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
      <Text style={styles.listItemFieldText}>{"> "} plany zabójstwa</Text>
      <Select
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
    </>
  );
};

const styles = formStyles;

PsychiatricAssessmentForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PsychiatricAssessmentForm;
