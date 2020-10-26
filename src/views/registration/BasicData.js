import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import AppButton from "../../components/common/AppButton";
import { BasicDataContext } from "../../modules/context/BasicDataContext";
import basicDataValidationSchema from "../../constants/validationSchemas/basicDataValidationSchema";
import BasicDataForm from "../../components/forms/BasicDataForm";
import FormContainer from "../../components/forms/FormContainer";
import { parseFormFieldValuesToObject } from "../../modules/utils/Parsers";
import { initialBasicData } from "../../constants/values/initalFormValues";

const BasicData = ({ route, navigation }) => {
  const { patientId } = route.params;
  const { setBasicData } = useContext(BasicDataContext);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  const initialState = initialBasicData;
  initialState.patient_id = patientId;

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
      patientId: PropTypes.number.isRequired,
      basicDataId: PropTypes.number.isRequired,
      physicalExaminationId: PropTypes.number.isRequired.id,
      psychiatricAssessmentId: PropTypes.number.isRequired.id,
    }),
  }).isRequired,
};

export default BasicData;
