import * as Yup from "yup";

const basicDataValidationSchema = Yup.object().shape({
  reason_of_report: Yup.string().label("Powód i kontekst zgłoszenia"),
  major_ailments: Yup.string().label("Główne dolegliwości"),
  suicidal_thoughts_choice: Yup.boolean()
    .nullable()
    .label("Obecność myśli i tendencji suicydalnych lub homicydalnych"),
  suicidal_thoughts: Yup.string().label(
    "Obecność myśli i tendencji suicydalnych lub homicydalnych"
  ),
  other_ailments: Yup.string().label("Inne dolegliwości"),
  past_diseases_choice: Yup.string().label("Przebyte choroby i operacje"),
  past_diseases: Yup.string().label("Przebyte choroby i operacje"),
  past_psychiatric_treatment: Yup.boolean()
    .nullable()
    .label("Przebyte leczenie psychiatryczne"),
  first_hospitalization: Yup.string().label("Rok pierwszej hospitalizacji"),
  hospitalization_times: Yup.number().label("Liczba hospitalizacji"),
  pharmacotherapy: Yup.string().label("Farmakoterapia"),
  psychotherapy: Yup.string().label("Psychoterapia"),
  family_therapy: Yup.string().label("Terapia rodzin"),
  medications_used: Yup.string().label("Stosowane leki"),
  allergies: Yup.string().label("Uczulenia i osobnicze reakcje"),
  hygiene: Yup.string().label("Higiena"),
  education_choice: Yup.string().label("Poziom wykształcenia"),
  education: Yup.string().label("Poziom wykształcenia"),
  professional_status: Yup.string().label("Status zawodowy"),
  social_conditions: Yup.string().label(
    "Warunki socjalne, materialne, mieszkaniowe"
  ),
  social_assistance_choice: Yup.boolean()
    .nullable()
    .label("Korzystanie z pomocy społecznej"),
  social_assistance: Yup.string().label("Korzystanie z pomocy społecznej"),
  social_level_changes: Yup.string().label(
    "Zmiany poziomu funkcjonowania społecznego"
  ),
  development_data: Yup.string().label("Istotne dane rozwojowe"),
  family_situation: Yup.string().label("Sytuacja rodzinna"),
  family_situation_changes: Yup.string().label(
    "Zmiany sytuacji rodzinnej na przestrzeni ostatnich lat"
  ),
  family_relationships: Yup.string().label(
    "Relacje rodzinne z uwzględnieniem więzi i obszarów konfliktowych"
  ),
  hereditary_taint: Yup.string().label("Obciążenia dziedziczne"),
  physical_activity: Yup.string().label("Poziom aktywności fizycznej"),
  self_mutilation: Yup.string().label("Samouszkodzenia w wywiadzie"),
  occupational_exposure: Yup.string().label("Narażenie na zagrożenie zawodowe"),
  alcohol: Yup.string().label("Alkohol"),
  nicotine: Yup.string().label("Nikotyna"),
  psychoactive_substances: Yup.string().label(
    "Nielegalne substancje psychoaktywne"
  ),
  diet_choice: Yup.string().label("Dieta"),
  diet: Yup.string().label("Dieta"),
  family_interview: Yup.string().label("Wywiad od rodziny"),
});

export default basicDataValidationSchema;
