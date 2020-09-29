import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsListScreen from "../../views/PatientsListScreen";
import PatientCardScreen from "../../views/PatientCardScreen";
import AddPatientScreen from "../../views/AddPatientScreen";
import BasicDataScreen from "../../views/BasicDataScreen";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../../components/common/FontForgeIcon";
import DiagnosisScreen from "../../views/DiagnosisScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{
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
          headerBackImage: () => (
            <FontForgeIcon
              name="back"
              size={32}
              color={Colors.PURPLE_VERY_LIGHT}
              style={{
                paddingTop: 8,
                marginLeft: 11,
                alignSelf: "flex-start",
                fontWeight: Typography.FONT_WEIGHT_BOLD,
                transform: [{ rotate: "352deg" }],
              }}
            />
          ),
        }}
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
          name="AddPatient"
          component={AddPatientScreen}
          options={{
            title: "Dane osobowe",
          }}
        />
        <Stack.Screen
          name="BasicData"
          component={BasicDataScreen}
          options={{
            title: "Informacje podstawowe",
          }}
        />
        <Stack.Screen
          name="Diagnosis"
          component={DiagnosisScreen}
          options={{
            title: "Diagnoza",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
