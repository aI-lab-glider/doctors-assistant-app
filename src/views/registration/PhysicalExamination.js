import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { PhysicalExaminationContext } from "../../modules/context/PhysicalExaminationContext";
import AppButton from "../../components/common/AppButton";
import physicalExaminationValidationSchema from "../../constants/validationSchemas/physicalExaminationValidationSchema";
import PhysicalExaminationForm from "../../components/forms/PhysicalExaminationForm";
import FormContainer from "../../components/forms/FormContainer";

const PhysicalExamination = ({ route, navigation }) => {
  const { physicalExaminationId, psychiatricAssessmentId } = route.params;
  const { patientsPhysicalExamination, updatePhysicalExamination } = useContext(
    PhysicalExaminationContext
  );
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = patientsPhysicalExamination.find(
    (physicalExamination) => physicalExamination.id === physicalExaminationId
  );

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const physicalExamination = values;
    const result = await updatePhysicalExamination(physicalExamination);
    if (result) {
      navigation.navigate("PsychiatricAssessment", {
        psychiatricAssessmentId,
      });
    }
    // TODO: Show alert with info what is wrong
  };

  return (
    <FormContainer style={styles.container}>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={physicalExaminationValidationSchema}
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
            <PhysicalExaminationForm
              handleBlur={handleBlur}
              handleChange={handleChange}
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
  },
});

PhysicalExamination.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      physicalExaminationId: PropTypes.number.isRequired,
      psychiatricAssessmentId: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default PhysicalExamination;
