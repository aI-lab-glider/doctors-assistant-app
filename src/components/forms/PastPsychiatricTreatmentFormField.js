import React from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import SelectFormField from "./SelectFormField";

const PastPsychiatricTreatmentFormField = ({
  name,
  leftText,
  rightText,
  defaultOption,
}) => {
  const { setFieldValue } = useFormikContext();

  const calculateDependentValueWhenFalse = () => {
    setFieldValue("hospitalization_times", "0");
  };

  return (
    <SelectFormField
      name={name}
      leftText={leftText}
      rightText={rightText}
      defaultOption={defaultOption}
      calculateDependentValueWhenFalse={calculateDependentValueWhenFalse}
    />
  );
};

PastPsychiatricTreatmentFormField.defaultProps = {
  defaultOption: null,
};

PastPsychiatricTreatmentFormField.propTypes = {
  name: PropTypes.string.isRequired,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
  defaultOption: PropTypes.bool,
};

export default PastPsychiatricTreatmentFormField;
