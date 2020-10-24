import * as React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddPatient from "../../../views/registration/AddPatient";
import BasicData from "../../../views/registration/BasicData";
import PhysicalExamination from "../../../views/registration/PhysicalExamination";
import PsychiatricAssessment from "../../../views/registration/PsychiatricAssessment";
import HeaderOptions from "../HeaderOptions";
import listeners from "./Listeners";

const Stack = createStackNavigator();

export const Routes = [
  {
    name: "AddPatient",
    component: AddPatient,
    title: "Dane Osobowe",
  },
  {
    name: "BasicData",
    component: BasicData,
    title: "Informacje podstawowe",
  },
  {
    name: "PhysicalExamination",
    component: PhysicalExamination,
    title: "Badanie fizykalne",
  },

  {
    name: "PsychiatricAssessment",
    component: PsychiatricAssessment,
    title: "Badanie psychiatryczne",
  },
];

const initialRoute = Routes[0];

export const getHeaderTitle = (route) => {
  console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route);

  const routeObj = Routes.find(({ name }) => {
    return routeName === name;
  });
  if (routeObj) {
    return routeObj.title;
  }
  return initialRoute.title;
};

const RegistrationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute.name}
      screenOptions={HeaderOptions}
    >
      {Routes.map(({ name, component, title }) => (
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
  );
};

export default RegistrationNavigator;
