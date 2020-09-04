import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Imię jest wymaganym polem").label("Imię"),
  surname: Yup.string()
    .required("Nazwisko jest wymaganym polem")
    .label("Nazwisko"),
  sex: Yup.string().oneOf(["male", "female"]).required().label("Płeć"),
  code: Yup.string()
    .matches(
      /^([a-tA-T]|[v-zV-Z])\d[a-zA-Z0-9](\.[a-zA-Z0-9]{1,4})?$/,
      "Kod musi być w formacie ICD-10"
    )
    .label("Kod rozpoznania"),
  pesel: Yup.string()
    .matches(/^[0-9]{11}$/, "Nieprawidłowy Pesel")
    .label("Pesel"),
  date_of_birth: Yup.string()
    .nullable()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])([- /.]|( - ))(0[1-9]|1[012])([- /.]|( - ))(19|20)\d\d$/,
      "Nieprawidłowy format daty. Data musi być postaci 01-01-1970"
    )
    .label("Data urodzenia"),
  weight: Yup.number().integer("Waga musi być liczbą całkowitą").label("Waga"),
  height: Yup.number()
    .integer("Wzrost musi być liczbą całkowitą wyrażoną w cm")
    .label("Wzrost"),
  bmi: Yup.number().label("Bmi"),
  note: Yup.string().label("Notatka"),
  phone: Yup.string()
    .matches(/^[0-9+]{8,13}$/, "Nieprawidłowy nr telefonu")
    .label("Telefon"),
  person_authorized: Yup.string().label("Osoba upoważniona"),
  phone_authorized: Yup.string()
    .matches(/^[0-9+]{8,13}$/, "Nieprawidłowy nr telefonu")
    .label("Telefon do osoby upoważnionej"),
  guardianship: Yup.boolean(),
});

export default validationSchema;
