import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import FormField from "./FormField";

const Pesel = ({
  name,
  leftIcon,
  keyboardType,
  placeholder,
  calculateDependentValue,
}) => {
  const { setFieldValue, values } = useFormikContext();

  if (calculateDependentValue != null)
    useEffect(() => {
      setFieldValue("date_of_birth", calculateDependentValue(values.pesel));
    }, [values.pesel]);

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

Pesel.defaultProps = {
  leftIcon: null,
  calculateDependentValue: null,
};

Pesel.propTypes = {
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  keyboardType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  calculateDependentValue: PropTypes.func,
};

export default Pesel;
