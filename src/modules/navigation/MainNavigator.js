import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsListScreen from "../../views/PatientsListScreen";
import PatientCardScreen from "../../views/PatientCardScreen";
import HeaderOptions from "./HeaderOptions";
import Navigator, { getHeaderTitle } from "./registrationNavigator/Navigator";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{ ...HeaderOptions }}
      >
        <Stack.Screen
          name="PatientsList"
          component={PatientsListScreen}
          options={{ title: "Lista pacjentów" }}
        />
        <Stack.Screen
          name="PatientCard"
          component={PatientCardScreen}
          options={{
            title: "Karta pacjenta",
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Navigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
