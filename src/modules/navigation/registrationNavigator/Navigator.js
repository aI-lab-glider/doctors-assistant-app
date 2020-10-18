import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddPatientScreen from "../../../views/registration/AddPatientScreen";
import BasicDataScreen from "../../../views/registration/BasicDataScreen";
import PhysicalExaminationScreen from "../../../views/registration/PhysicalExaminationScreen";
import PsychiatricAssessmentScreen from "../../../views/registration/PsychiatricAssessmentScreen";
import HeaderOptions from "../HeaderOptions";
import listeners from "./Listeners";

const Stack = createStackNavigator();

export const Routes = [
  {
    name: "AddPatient",
    component: AddPatientScreen,
    title: "Dane Osobowe",
  },
  {
    name: "BasicData",
    component: BasicDataScreen,
    title: "Informacje podstawowe",
  },
  {
    name: "PhysicalExamination",
    component: PhysicalExaminationScreen,
    title: "Badanie fizykalne",
  },

  {
    name: "PsychiatricAssessment",
    component: PsychiatricAssessmentScreen,
    title: "Badanie psychiatryczne",
  },
];

const initialRoute = Routes[0];

export const getHeaderTitle = (route) => {
  const routeObj = Routes.find(({ name }) => {
    return route === name;
  });
  if (routeObj) {
    return routeObj.title;
  }
  return initialRoute.title;
};

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute.name}
      screenOptions={HeaderOptions}
    >
      {Routes.map(({ name, component, title }) => (
        <Stack.Screen
          name={name}
          component={component}
          options={{
            title,
          }}
          listeners={listeners}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Navigator;
