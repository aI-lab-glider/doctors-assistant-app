import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormField from "./FormField";

const Weight = ({
  name,
  leftIcon,
  keyboardType,
  placeholder,
  calculateDependentValue,
}) => {
  const { setFieldValue, values } = useFormikContext();

  if (calculateDependentValue != null)
    useEffect(() => {
      setFieldValue(
        "bmi",
        calculateDependentValue(values.height, values.weight)
      );
    }, [values.height, values.weight]);

  return (
    <>
      <FormField
        name={name}
        leftIcon={leftIcon}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </>
  );
};

Weight.defaultProps = {
  leftIcon: null,
  calculateDependentValue: null,
};

Weight.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  keyboardType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  calculateDependentValue: PropTypes.func,
};

export default Weight;
