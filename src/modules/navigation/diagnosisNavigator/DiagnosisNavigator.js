import * as React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderOptions from "../HeaderOptions";
import DiagnosisResults from "../../../views/diagnosis/DiagnosisResults";
import ModulesListScreen from "../../../views/diagnosis/ModulesListScreen";
import MajorQuestionsForm from "../../../views/diagnosis/MajorQuestionsForm";
import MinorQuestionsForm from "../../../views/diagnosis/MinorQuestionsForm";

const Stack = createStackNavigator();

export const Routes = [
  {
    name: "ModulesList",
    component: ModulesListScreen,
    title: "Lista modułów",
  },
  {
    name: "Results",
    component: DiagnosisResults,
    title: "Lista modułów",
  },
  {
    name: "Major",
    component: MajorQuestionsForm,
  },
  {
    name: "Minor",
    component: MinorQuestionsForm,
  },
];

const initialRoute = Routes[0];

const routeWithCustomTitle = Routes[0];
const defaultTitle = "Diagnoza";

export const getDiagnosisHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === routeWithCustomTitle.name) {
    return routeWithCustomTitle.title;
  }
  return defaultTitle;
};

const DiagnosisNavigator = () => {
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
        />
      ))}
    </Stack.Navigator>
  );
};

export default DiagnosisNavigator;
