import * as Yup from "yup";
import {
  DATE_REGEX,
  PATIENT_CODE_REGEX,
  PESEL_REGEX,
  PHONE_REGEX,
} from "../values/constants";

const personalDataValidationSchema = Yup.object().shape({
  name: Yup.string().required("Imię jest wymaganym polem").label("Imię"),
  surname: Yup.string()
    .required("Nazwisko jest wymaganym polem")
    .label("Nazwisko"),
  sex: Yup.string().oneOf(["male", "female"]).required().label("Płeć"),
  code: Yup.string()
    .matches(PATIENT_CODE_REGEX, "Kod musi być w formacie ICD-10")
    .label("Kod rozpoznania"),
  pesel: Yup.string()
    .matches(PESEL_REGEX, "Nieprawidłowy Pesel")
    .label("Pesel"),
  date_of_birth: Yup.string()
    .nullable()
    .matches(
      DATE_REGEX,
      "Nieprawidłowy format daty. Data musi być w formacie 01-01-1900"
    )
    .required("Data urodzenia jest wymaganym polem")
    .label("Data urodzenia"),
  weight: Yup.number().integer("Waga musi być liczbą całkowitą").label("Waga"),
  height: Yup.number()
    .integer("Wzrost musi być liczbą całkowitą wyrażoną w cm")
    .label("Wzrost"),
  bmi: Yup.number().label("Bmi"),
  note: Yup.string().label("Notatka"),
  phone: Yup.string()
    .matches(PHONE_REGEX, "Nieprawidłowy nr telefonu")
    .label("Telefon"),
  person_guard: Yup.string().label("Osoba upoważniona"),
  phone_guard: Yup.string()
    .matches(PHONE_REGEX, "Nieprawidłowy nr telefonu")
    .label("Telefon do osoby upoważnionej"),
  guardianship: Yup.boolean(),
});

export default personalDataValidationSchema;
