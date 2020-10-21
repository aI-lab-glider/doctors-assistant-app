import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { PhysicalExaminationContext } from "../../modules/context/PhysicalExaminationContext";
import AppButton from "../../components/common/AppButton";
import physicalExaminationValidationSchema from "../../constants/validationSchemas/physicalExaminationValidationSchema";
import PhysicalExaminationForm from "../../components/forms/PhysicalExaminationForm";
import { initialPhysicalExamination } from "../../constants/values/initalFormValues";
import FormContainer from "./FormContainer";

const PhysicalExamination = ({ route, navigation }) => {
  const { patientId } = route.params;
  const { setPhysicalExamination } = useContext(PhysicalExaminationContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialValues = initialPhysicalExamination;
  initialValues.patient_id = patientId;

  const onButtonPressed = async (values) => {
    setNextButtonDisabled(true);
    const physicalExamination = values;
    physicalExamination.id = await setPhysicalExamination(physicalExamination);
    if (physicalExamination.id) {
      navigation.navigate("PsychiatricAssessment", {
        patientId,
      });
    }
    // TODO: Show alert with info what is wrong
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
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

PhysicalExamination.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default PhysicalExamination;
