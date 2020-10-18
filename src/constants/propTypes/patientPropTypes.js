import PropTypes from "prop-types";
import { PATIENT_CODE_REGEX } from "../constants";

// eslint-disable-next-line no-unused-vars
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
// TODO: Create service to add new diagnosis to database
// TODO: Add guardianship to patient table
const Patient = PropTypes.shape({
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
});

export default Patient;
