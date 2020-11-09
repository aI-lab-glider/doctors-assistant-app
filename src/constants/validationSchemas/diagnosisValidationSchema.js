import * as Yup from "yup";

const diagnosisValidationSchema = Yup.object().shape({
  answers: Yup.array()
    .of(Yup.number().oneOf([0, 1], "Wykryto brakującą odpowiedź"))
    .required("Odpowiedzi są wymagane"),
});

export default diagnosisValidationSchema;
