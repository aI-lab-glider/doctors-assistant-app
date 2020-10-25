import PropTypes from "prop-types";
import { CodeProp } from "./patientPropTypes";

export const diseasesProbabilityPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    disease_icd10: CodeProp.isRequired,
    disease_name: PropTypes.string.isRequired,
    probability: PropTypes.number.isRequired,
    conditionsAcc: PropTypes.shape({
      main: PropTypes.shape({
        allAnswers: PropTypes.number,
        validAnswers: PropTypes.number,
      }).isRequired,
      side: PropTypes.shape({
        allAnswers: PropTypes.number,
        validAnswers: PropTypes.number,
      }).isRequired,
      detail: PropTypes.shape({
        allAnswers: PropTypes.number,
        validAnswers: PropTypes.number,
      }).isRequired,
    }),
  })
);

export const modulePropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
});
