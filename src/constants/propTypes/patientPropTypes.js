import PropTypes from "prop-types";
import { PATIENT_CODE_REGEX } from "../values/constants";

export const CodeProp = (props, propName, componentName) => {
  if (
    !PATIENT_CODE_REGEX.test(
      // eslint-disable-next-line react/destructuring-assignment
      props[propName]
    )
  ) {
    return new Error(
      `Invalid Code: \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`
    );
  }
  return null;
};
export const DiagnosisProptypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  disease_icd10: CodeProp.isRequired,
  disease_name: PropTypes.string.isRequired,
  module_code: PropTypes.string.isRequired,
  module_name: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
});

// TODO: Add guardianship to patient table
const Patient = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  phone: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
  bmi: PropTypes.number,
  pesel: PropTypes.string,
  date_of_birth: PropTypes.string.isRequired,
  note: PropTypes.string,
  person_guard: PropTypes.string,
  phone_guard: PropTypes.string,
  diagnosis: PropTypes.arrayOf(DiagnosisProptypes),
});

export default Patient;
