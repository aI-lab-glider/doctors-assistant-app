import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsList from "../../views/PatientsList";
import PatientCard from "../../views/PatientCard";
import HeaderOptions from "./HeaderOptions";
import RegistrationNavigator, {
  getHeaderTitle,
} from "./registrationNavigator/RegistrationNavigator";
import DiagnosisNavigator, {
  getDiagnosisHeaderTitle,
} from "./diagnosisNavigator/DiagnosisNavigator";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PatientsList"
        screenOptions={{ ...HeaderOptions }}
      >
        <Stack.Screen
          name="PatientsList"
          component={PatientsList}
          options={{ title: "Lista pacjentów" }}
        />
        <Stack.Screen
          name="PatientCard"
          component={PatientCard}
          options={{
            title: "Karta pacjenta",
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name="Diagnosis"
          component={DiagnosisNavigator}
          options={({ route }) => ({
            headerTitle: getDiagnosisHeaderTitle(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
