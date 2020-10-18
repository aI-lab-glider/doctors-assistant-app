import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import personalDataValidationSchema from "../../constants/validationSchemas/personalDataValidationSchema";
import { PatientsContext } from "../../modules/context/PatientsContext";
import AddPatientForm from "../../components/forms/addPatient/AddPatientForm";
import AppButton from "../../components/common/AppButton";
import FormContainer from "./FormContainer";
import { parseFormFieldValuesToObject } from "../../modules/utils/Parsers";

const AddPatient = ({ navigation }) => {
  const { setPatient } = useContext(PatientsContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = {
    name: "",
    surname: "",
    sex: "male",
    pesel: "",
    date_of_birth: "",
    weight: "0",
    bmi: "0",
    height: "0",
    note: "",
    phone: "",
    person_guard: "",
    phone_guard: "",
  };

  const keysWithParserFunctions = {
    weight: (val) => parseInt(val, 10),
    height: (val) => parseInt(val, 10),
    bmi: (val) => parseFloat(Math.round(val * 100) / 100),
  };

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const patient = parseFormFieldValuesToObject(
      values,
      keysWithParserFunctions
    );

    patient.id = await setPatient(patient);
    if (patient.id) {
      navigation.navigate("BasicData", {
        patient,
      });
    }
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={personalDataValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          isValid = true,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <AddPatientForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            <AppButton
              icon="next_btn"
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting || isNextButtonDisabled}
            />
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

AddPatient.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddPatient;
