import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsListScreen from "../../views/PatientsListScreen";
import PatientCardScreen from "../../views/PatientCardScreen";
import AddPatientScreen from "../../views/AddPatientScreen";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../../components/FontForgeIcon";

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
          options={{
            title: "Dane osobowe",
            headerStyle: {
              backgroundColor: Colors.PURPLE,
              height: 105,
              borderBottomLeftRadius: 50,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: Colors.WHITE,
            headerTitleStyle: {
              fontSize: Typography.FONT_SIZE_17,
              alignSelf: "center",
              color: Colors.PURPLE_VERY_LIGHT,
              fontFamily: Typography.FONT_FAMILY_BOLD,
              paddingBottom: 7,
            },
            headerLeft: null,
            headerRight: () => (
              <FontForgeIcon
                name="doctor_profile"
                size={30}
                color={Colors.PURPLE_VERY_LIGHT}
                style={{
                  marginRight: 20,
                  marginBottom: 7,
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
