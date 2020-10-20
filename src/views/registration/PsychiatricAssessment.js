import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { PsychiatricAssessmentContext } from "../../modules/context/PsychiatricAssessmentContext";
import AppButton from "../../components/common/AppButton";
import psychiatricAssessmentValidationSchema from "../../constants/validationSchemas/psychiatricAssessmentValidationSchema";
import { initialPsychiatricAssessment } from "../../constants/values/initalFormValues";
import FormContainer from "../../components/forms/FormContainer";
import PsychiatricAssessmentForm from "../../components/forms/PsychiatricAssessmentForm";

const PsychiatricAssessment = ({ route, navigation }) => {
  const { patientId } = route.params;
  const { setPsychiatricAssessment } = useContext(PsychiatricAssessmentContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = initialPsychiatricAssessment;
  initialState.patient_id = patientId;

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const psychiatricAssessment = values;

    psychiatricAssessment.id = await setPsychiatricAssessment(
      psychiatricAssessment
    );
    if (psychiatricAssessment.id) {
      navigation.navigate("PatientsList");
    }
    // TODO: Show alert with info what is wrong
  };
  return (
    <FormContainer style={styles.container}>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={psychiatricAssessmentValidationSchema}
        onSubmit={(values) => onButtonPressed(values)}
      >
        {({
          handleChange,
          handleSubmit,
          isValid,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <PsychiatricAssessmentForm
              handleChange={handleChange}
              handleBlur={handleBlur}
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 22,
  },
});
PsychiatricAssessment.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default PsychiatricAssessment;
