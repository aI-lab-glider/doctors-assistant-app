import * as React from "react";
import { Alert, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PatientsListScreen from "../../views/PatientsListScreen";
import PatientCardScreen from "../../views/PatientCardScreen";
import AddPatientScreen from "../../views/AddPatientScreen";
import BasicDataScreen from "../../views/BasicDataScreen";
import PhysicalExaminationScreen from "../../views/PhysicalExaminationScreen";
import PsychiatricAssessmentScreen from "../../views/PsychiatricAssessmentScreen";
import { Colors, Typography } from "../../constants/styles";
import FontForgeIcon from "../../components/common/FontForgeIcon";

const backIcon = (
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
);

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={({ navigation }) => ({
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
          headerBackImage: () => {
            return (
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "",
                    "Czy na pewno chcesz przerwać wywiad i powrócić do listy pacjentów?",
                    [
                      {
                        text: "Kontynuuj",
                        onPress: () => {},
                        style: "cancel",
                      },
                      {
                        text: "Przerwij",
                        onPress: () => navigation.navigate("PatientsList"),
                      },
                    ]
                  )
                }
              >
                {backIcon}
              </TouchableOpacity>
            );
          },
        })}
      >
        <Stack.Screen
          name="PatientsList"
          component={PatientsListScreen}
          options={{ title: "Lista pacjentów" }}
        />
        <Stack.Screen
          name="PatientCard"
          component={PatientCardScreen}
          options={({ navigation }) => ({
            title: "Karta pacjenta",
            headerBackImage: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("PatientsList")}
                >
                  {backIcon}
                </TouchableOpacity>
              );
            },
          })}
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
          name="PhysicalExamination"
          component={PhysicalExaminationScreen}
          options={{
            title: "Badanie fizykalne",
          }}
        />
        <Stack.Screen
          name="PsychiatricAssessment"
          component={PsychiatricAssessmentScreen}
          options={{
            title: "Badanie psychiatryczne",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
