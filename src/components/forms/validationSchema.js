import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  surname: Yup.string().required().label("Surname"),
  sex: Yup.string().oneOf(["male", "female"]).required().label("Sex"),
  code: Yup.string()
    .matches(/^[A-TV-Z][0-9][0-9AB]\.?[0-9A-TV-Z]{0,4}$/)
    .label("Code"),
  pesel: Yup.string()
    .matches(/^[0-9]{11}$/, "Pesel is not valid")
    .label("Pesel"),
  date_of_birth: Yup.string()
    .nullable()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])([- /.]|( - ))(0[1-9]|1[012])([- /.]|( - ))(19|20)\d\d$/
    )
    .label("Date of birth"),
  weight: Yup.number().integer().label("Weight"),
  height: Yup.number().integer().label("Height"),
  bmi: Yup.number().label("Bmi"),
  note: Yup.string().label("Note"),
  phone: Yup.string()
    .matches(/^[0-9+]{8,13}$/, "Phone number is not valid")
    .label("Phone"),
  person_authorized: Yup.string().label("Person authorized"),
  phone_authorized: Yup.string()
    .matches(/^[0-9+]{8,13}$/, "Phone number is not valid")
    .label("Phone"),
  guardianship: Yup.boolean(),
});

export default validationSchema;
