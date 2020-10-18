import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import AppButton from "../../components/common/AppButton";
import { BasicDataContext } from "../../modules/context/BasicDataContext";
import basicDataValidationSchema from "../../constants/validationSchemas/basicDataValidationSchema";
import Patient from "../../constants/propTypes/patientPropTypes";
import BasicDataForm from "../../components/forms/BasicDataForm";
import FormContainer from "./FormContainer";
import { parseFormFieldValuesToObject } from "../../modules/utils/Parsers";

const BasicData = ({ route, navigation }) => {
  const { patient } = route.params;
  const { setBasicData } = useContext(BasicDataContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);
  const patientId = patient.id;

  const initialState = {
    patient_id: patientId,
    reason_of_report: "",
    major_ailments: "",
    suicidal_thoughts_choice: null,
    suicidal_thoughts: "",
    other_ailments: "",
    past_diseases_choice: "",
    past_diseases: "",
    past_psychiatric_treatment: false,
    first_hospitalization: "",
    hospitalization_times: 0,
    pharmacotherapy: "",
    psychotherapy: "",
    family_therapy: "",
    medications: "",
    allergies: "",
    hygiene: "",
    education_choice: "",
    education: "",
    professional_status: "",
    social_conditions: "",
    social_assistance_choice: null,
    social_assistance: "",
    social_level_changes: "",
    development_data: "",
    family_situation: "",
    family_situation_changes: "",
    family_relationships: "",
    hereditary_taint: "",
    physical_activity: "",
    self_mutilation: "",
    occupational_exposure: "",
    alcohol: "",
    nicotine: "",
    psychoactive_substances: "",
    diet_choice: "",
    diet: "",
    family_interview: "",
  };

  const keysWithParserFunctions = {
    hospitalization_times: (val) => parseInt(val, 10),
  };

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const basicData = parseFormFieldValuesToObject(
      values,
      keysWithParserFunctions
    );
    basicData.id = await setBasicData(basicData);

    if (basicData.id) {
      navigation.navigate("PhysicalExamination", {
        patientId,
      });
    }
    // TODO: Show alert with info what is wrong
  };

  return (
    <FormContainer title="Wywiad">
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={basicDataValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          isValid,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <BasicDataForm
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

BasicData.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patient: Patient.isRequired,
    }),
  }).isRequired,
};

export default BasicData;
