import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PropTypes from "prop-types";
import HeaderOptions from "../HeaderOptions";
import DiagnosisResults from "../../../views/diagnosis/DiagnosisResults";
import ModulesListScreen from "../../../views/diagnosis/ModulesListScreen";
import MajorQuestionsForm from "../../../views/diagnosis/MajorQuestionsForm";
import MinorQuestionsForm from "../../../views/diagnosis/MinorQuestionsForm";
import DiagnosisContextProvider from "../../context/DiagnosisContext";
import { backAction } from "../Listeners";

const Stack = createStackNavigator();

export const Routes = [
  {
    name: "ModulesList",
    component: ModulesListScreen,
    title: "Lista modułów",
    listeners: ({ navigation }) =>
      backAction({
        navigation,
        navigationRouteName: "PatientCard",
        message:
          "Czy na pewno chcesz przerwać diagnozę? Rozpoznania nie zostaną dodane do pacjenta.",
      }),
  },
  {
    name: "Results",
    component: DiagnosisResults,
    title: "Wyniki diagnozy",
  },
  {
    name: "Major",
    component: MajorQuestionsForm,
    title: "Pytania podstawowe",
  },
  {
    name: "Minor",
    component: MinorQuestionsForm,
    title: "Pytania uszczegóławiające",
  },
];

const initialRoute = Routes[0];

const DiagnosisNavigator = ({ route }) => {
  const { patientId } = route.params;
  return (
    <DiagnosisContextProvider patientId={patientId}>
      <Stack.Navigator
        initialRouteName={initialRoute.name}
        screenOptions={HeaderOptions}
      >
        {Routes.map(({ name, component, title, listeners }) => (
          <Stack.Screen
            name={name}
            key={name}
            component={component}
            options={{
              title,
            }}
            listeners={listeners}
          />
        ))}
      </Stack.Navigator>
    </DiagnosisContextProvider>
  );
};

DiagnosisNavigator.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DiagnosisNavigator;
