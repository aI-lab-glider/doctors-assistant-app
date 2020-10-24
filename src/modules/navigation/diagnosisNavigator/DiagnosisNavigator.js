import * as React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderOptions from "../HeaderOptions";
import DiagnosisResults from "../../../views/diagnosis/DiagnosisResults";
import ModulesList from "../../../views/diagnosis/ModulesList";

const Stack = createStackNavigator();

export const Routes = [
  {
    name: "ModulesList",
    component: ModulesList,
    title: "Lista modułów",
  },
  {
    name: "Results",
    component: DiagnosisResults,
    title: "Wyniki diagnozy",
  },
];

const initialRoute = Routes[0];

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
