import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT SCENES
import RegisterScreen from "../../views/authentication/Register";
import LoginScreen from "../../views/authentication/Login";
import UsernameScreen from "../../views/authentication/Username";
import ForgotPasswordScreen from "../../views/authentication/ForgotPassword";

import {
  headerStyle,
  headerTitleStyle,
} from "../../constants/styles/authTheme";

// Create Routes
const AuthStack = createStackNavigator();
// TODO add authTheme to options
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="Username" component={UsernameScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);
/*
const AuthStack = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
    Username: UsernameScreen,
    ForgotPassword: ForgotPasswordScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: () => ({ headerStyle, headerTitleStyle }),
  }
);
*/
export default AuthStackScreen;
