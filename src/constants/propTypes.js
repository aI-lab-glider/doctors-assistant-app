import PropTypes from "prop-types";
import { PATIENT_CODE_REGEX } from "./constants";

const CodeProp = (props, propName, componentName) => {
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

const Patient = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  phone: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
  bmi: PropTypes.number,
  diagnosis: PropTypes.arrayOf(PropTypes.string),
  medicines: PropTypes.arrayOf(PropTypes.string),
  hospitalization_times: PropTypes.number,
  pesel: PropTypes.string,
  date_of_birth: PropTypes.string.isRequired,
  note: PropTypes.string,
  person_authorized: PropTypes.string,
  phone_authorized: PropTypes.string,
  guardianship: PropTypes.number,
  first_hospitalization: PropTypes.string,
  code: CodeProp,
});

export default Patient;
