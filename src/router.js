import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
// IMPORT ROUTES
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./modules/navigation/auth";
import HomeStack from "./modules/navigation/home";

import AuthLoading from "./views/authentication/AuthLoading";
import AuthProvider from "./modules/context/Auth";
import Home from "./views/home/Home";

// APP ROUTES STACK
const AppStack = createStackNavigator();

const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="AuthStack" component={AuthStack} />
    <AppStack.Screen name="HomeStack" component={HomeStack} />
  </AppStack.Navigator>
);
/*
  {
    Loading: AuthLoading,
    Auth: AuthStack,
    App: HomeStack,
  },
  { initialRouteName: "Loading" }
);
*/

// const Navigator = createAppContainer(AppStack);

export default function Router(props) {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppStackScreen />
      </AuthProvider>
    </NavigationContainer>
  );
}
