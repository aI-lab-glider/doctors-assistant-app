import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT VIEWS
import RegisterScreen from "../../views/authentication/Register";
import LoginScreen from "../../views/authentication/Login";
import ForgotPasswordScreen from "../../views/authentication/ForgotPassword";

// Create Routes
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
