import React from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import SelectFormField from "./SelectFormField";

const PastPsychiatricTreatmentFormField = ({
  name,
  leftText,
  rightText,
  defaultOption = null,
}) => {
  const { setFieldValue } = useFormikContext();

  const calculateDependentValueWhenRightChecked = () => {
    setFieldValue("hospitalization_times", "0");
  };

  return (
    <SelectFormField
      name={name}
      leftText={leftText}
      rightText={rightText}
      defaultOption={defaultOption}
      calculateDependentValueWhenRightChecked={
        calculateDependentValueWhenRightChecked
      }
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
