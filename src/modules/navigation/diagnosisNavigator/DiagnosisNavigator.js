import * as React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderOptions from "../HeaderOptions";
import DiagnosisResults from "../../../views/diagnosis/DiagnosisResults";
import ModulesListScreen from "../../../views/diagnosis/ModulesListScreen";
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
    title: "Wyniki diagnozy",
  },
  {
    name: "Minor",
    component: MinorQuestionsForm,
    title: "Pytania bazowe",
  },
];

const initialRoute = Routes[0];

// TODO: Refactor repeatings
export const getDiagnosisHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  const routeObj = Routes.find(({ name }) => {
    return routeName === name;
  });
  if (routeObj) {
    return routeObj.title;
  }
  return initialRoute.title;
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
