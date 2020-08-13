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

export default AuthStack;
