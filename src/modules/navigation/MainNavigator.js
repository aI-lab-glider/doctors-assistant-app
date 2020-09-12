import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsListScreen from "../../views/PatientsListScreen";
import PatientCardScreen from "../../views/PatientCardScreen";
import AddPatientScreen from "../../views/AddPatientScreen";

import AuthProvider, { useAuth } from "../context/Auth";
import AuthStack from "./Auth";

const Stack = createStackNavigator();

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  const { state } = useAuth();
  const { isLoggedIn } = state;

  return (
    <AppStack.Navigator>
      {isLoggedIn === false ? (
        <AppStack.Screen name="Auth" component={AuthStack} />
      ) : (
        <AppStack.Screen name="Home" component={HomeScreen} />
      )}
    </AppStack.Navigator>
  );
};

const HomeScreen = () => (
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
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppStackScreen />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default MainNavigator;
