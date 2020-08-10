import React from "react";
import PropTypes from "prop-types";
import AppButton from "../AppButton";

const FormButton = ({ title, onPress }) => {
  return <AppButton title={title} onPress={onPress} />;
};

FormButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default FormButton;
