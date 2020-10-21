import React from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import Select from "./Select";

const PastPsychiatricTreatment = ({
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
    <Select
      name={name}
      leftText={leftText}
      rightText={rightText}
      defaultOption={defaultOption}
      calculateDependentValueWhenFalse={calculateDependentValueWhenFalse}
    />
  );
};

PastPsychiatricTreatment.defaultProps = {
  defaultOption: null,
};

PastPsychiatricTreatment.propTypes = {
  name: PropTypes.string.isRequired,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
  defaultOption: PropTypes.bool,
};

export default PastPsychiatricTreatment;
