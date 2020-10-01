import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT VIEWS
import RegisterScreen from "../../views/authentication/Register";
import LoginScreen from "../../views/authentication/Login";
import ForgotPasswordScreen from "../../views/authentication/ForgotPassword";
import { Colors } from "../../constants/styles";

// Create Routes
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.PURPLE,
        height: 105,
        borderBottomLeftRadius: 50,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitle: false,
    }}
  >
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
