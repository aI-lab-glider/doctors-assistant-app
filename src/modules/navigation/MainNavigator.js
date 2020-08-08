import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsListScreen from "../../views/PatientsListScreen";
import PatientCardScreen from "../../views/PatientCardScreen";
import AddPatientScreen from "../../views/AddPatientScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PatientsList">
        <Stack.Screen
          name="PatientsList"
          component={PatientsListScreen}
          options={{ title: "Patients list" }}
        />
        <Stack.Screen
          name="PatientCard"
          component={PatientCardScreen}
          options={{ title: "Patient card" }}
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatientScreen}
          options={{ title: "Add patient" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
