import * as Yup from "yup";

const psychiatricAssessmentValidationSchema = Yup.object().shape({
  general_appearance: Yup.string().label("Ogólny wygląd badanego"),
  outfit_choice: Yup.string().label("Strój"),
  appearance_care: Yup.string().label("Stopień zadbania o wygląd"),
  unusual_features_gestures: Yup.string().label(
    "Wszystkie niezwykłe cechy lub gesty"
  ),
  agree_examination_choice: Yup.bool()
    .nullable()
    .label("Czy chętnie zgadza się na badanie?"),
  agree_examination: Yup.string().label("Czy chętnie zgadza się na badanie?"),
  trusting_choice: Yup.bool().nullable().label("Czy jest ufny?"),
  trusting: Yup.string().label("Czy jest ufny?"),
  aggressive_choice: Yup.bool().nullable().label("Czy jest agresywny?"),
  aggressive: Yup.string().label("Czy jest agresywny?"),
  distance_shorten_choice: Yup.bool().nullable().label("Czy skraca dystans?"),
  distance_shorten: Yup.string().label("Czy skraca dystans?"),
  sexualizing_contact_choice: Yup.bool()
    .nullable()
    .label("Czy seksualizuje kontakt?"),
  sexualizing_contact: Yup.string().label("Czy seksualizuje kontakt?"),
  irritated_easily_choice: Yup.bool()
    .nullable()
    .label("Czy łatwo się irytuje?"),
  irritated_easily: Yup.string().label("Czy łatwo się irytuje?"),
  fear_cause_choice: Yup.bool().nullable().label("Czy wzbudza lęk?"),
  fear_cause: Yup.string().label("Czy wzbudza lęk?"),
  irritate_choice: Yup.bool().nullable().label("Czy wzbudza irytacje?"),
  irritate: Yup.string().label("Czy wzbudza irytacje?"),
  autopsychic_orientation_choice: Yup.bool()
    .nullable()
    .label("Zachowana orientacja autopsychiczna"),
  autopsychic_orientation: Yup.string().label(
    "Zachowana orientacja autopsychiczna"
  ),
  allopsychic_orientation_choice: Yup.bool()
    .nullable()
    .label("Zachowana orientacja allopsychiczna"),
  allopsychic_orientation: Yup.string().label(
    "Zachowana orientacja allopsychiczna"
  ),
  answer_questions_choice: Yup.string().label("Sposób odpowiadania na pytania"),
  answer_questions: Yup.string().label("Sposób odpowiadania na pytania"),
  accent_difficulties: Yup.bool().nullable().label("Akcent"),
  accent: Yup.string().label("Akcent"),
  dialect_difficulties: Yup.bool().nullable().label("Dialekt"),
  dialect: Yup.string().label("Dialekt"),
  speech_speed_difficulties: Yup.bool().nullable().label("Szybkość mowy"),
  speech_speed: Yup.string().label("Szybkość mowy"),
  speech_tone_difficulties: Yup.bool().nullable().label("Ton mowy"),
  speech_tone: Yup.string().label("Ton mowy"),
  speech_impairment_difficulties: Yup.bool()
    .nullable()
    .label("Upośledzenia mowy"),
  speech_impairment: Yup.string().label("Upośledzenia mowy"),
  aphasia_features_difficulties: Yup.bool().nullable().label("Cechy afazji"),
  aphasia_features: Yup.string().label("Cechy afazji"),
  moving_way_choice: Yup.string().label(
    "Sposób poruszania się, przyjmowane pozy"
  ),
  moving_way: Yup.string().label("Sposób poruszania się, przyjmowane pozy"),
  attention_disorders_choice: Yup.string()
    .oneOf([
      "nie stwierdza się",
      "zaburzenia koncentracji uwagi",
      "poważne zaburzenia koncentra­cji uwagi",
    ])
    .label("Zaburzenia uwagi"),
  attention_disorders: Yup.string().label("Zaburzenia uwagi"),
  memory_impairment_choice: Yup.string().label("Zaburzenia pamięci"),
  memory_impairment: Yup.string().label("Zaburzenia pamięci"),
  mood_choice: Yup.string()
    .oneOf([
      "wyrównany",
      "nieznacznie obniżony",
      "obniżony",
      "znacznie obniżony",
      "nieznacznie podwyższony",
      "podwyższony",
      "znacznie podwyższony",
      "dysforyczny",
    ])
    .label("Nastrój"),
  mood: Yup.string().label("Nastrój"),
  psychomotor_drive_choice: Yup.string()
    .oneOf([
      "wyrównany",
      "nieznacznie obniżony",
      "obniżony",
      "znacznie obniżony",
      "nieznacznie podwyższony",
      "podwyższony",
      "znacznie podwyższony",
    ])
    .label("Napęd psychoruchowy"),
  psychomotor_drive: Yup.string().label("Napęd psychoruchowy"),
  affect_choice: Yup.string().label("Afekt"),
  affect: Yup.string().label("Afekt"),
  anxiety_choice: Yup.string().label("Niepokój"),
  anxiety: Yup.string().label("Niepokój"),
  delusions_choice: Yup.string().label("Urojenia"),
  delusions: Yup.string().label("Urojenia"),
  hallucinations_choice: Yup.string().label("Halucynacje, pseudohalucyjnacje"),
  hallucinations: Yup.string().label("Halucynacje, pseudohalucyjnacje"),
  illusions_choice: Yup.string().label("Iluzje"),
  illusions: Yup.string().label("Iluzje"),
  perception_disorders_choice: Yup.string().label(
    "Zaburzenia spostrzegania - inne"
  ),
  perception_disorders: Yup.string().label("Zaburzenia spostrzegania - inne"),
  abnormal_thinking_choice: Yup.string().label("Zaburzenia toku myślenia"),
  abnormal_thinking: Yup.string().label("Zaburzenia toku myślenia"),
  criticism_disturbance_choice: Yup.string().label(
    "Zaburzenia krytycyzmu i wyglądu"
  ),
  criticism_disturbance: Yup.string().label("Zaburzenia krytycyzmu i wyglądu"),
  complex_activity_choice: Yup.string().label("Aktywność złożona"),
  complex_activity: Yup.string().label("Aktywność złożona"),
  catatonic_parakinesis_choice: Yup.string().label("Parakinezy katatoniczne"),
  catatonic_parakinesis: Yup.string().label("Parakinezy katatoniczne"),
  memorizing_difficulties: Yup.bool().nullable().label("Zapamiętywanie"),
  memorizing: Yup.string().label("Zapamiętywanie"),
  attention_counting_difficulties: Yup.bool()
    .nullable()
    .label("Uwaga i liczenie"),
  attention_counting: Yup.string().label("Uwaga i liczenie"),
  reminding_difficulties: Yup.bool().nullable().label("Przypominanie"),
  reminding: Yup.string().label("Przypominanie"),
  language_skills_difficulties: Yup.bool()
    .nullable()
    .label("Zdolności językowe"),
  language_skills: Yup.string().label("Zdolności językowe"),
  resignation_thoughts_choice: Yup.bool()
    .nullable()
    .label("Myśli rezygnacyjne"),
  resignation_thoughts: Yup.string().label("Myśli rezygnacyjne"),
  suicide_thoughts_choice: Yup.bool().nullable().label("Myśli samobójcze"),
  suicide_thoughts: Yup.string().label("Myśli samobójcze"),
  suicidal_plans_choice: Yup.bool()
    .nullable()
    .label("Plany i tendencje samobójcze"),
  suicidal_plans: Yup.string().label("Plany i tendencje samobójcze"),
  murder_fantasies_choice: Yup.bool().nullable().label("Fantazje o zabójstwie"),
  murder_fantasies: Yup.string().label("Fantazje o zabójstwie"),
  murder_plans_choice: Yup.bool().nullable().label("Plany zabójstwa"),
  murder_plans: Yup.string().label("Plany zabójstwa"),
});

export default psychiatricAssessmentValidationSchema;
