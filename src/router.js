import React from "react";

import {
  createAppContainer,
  createSwitchNavigator,
} from "@react-navigation/native";

// IMPORT ROUTES
import AuthStack from "./modules/navigation/auth";
import HomeStack from "./modules/navigation/home";

import AuthLoading from "./views/authentication/AuthLoading";
import AuthProvider from "./modules/context/Auth";

// APP ROUTES STACK
const AppStack = createSwitchNavigator(
  {
    Loading: AuthLoading,
    Auth: AuthStack,
    App: HomeStack,
  },
  { initialRouteName: "Loading" }
);

const Navigator = createAppContainer(AppStack);

export default function Router(props) {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}
