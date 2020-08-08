import React from "react";
import MainNavigator from "./src/modules/navigation/MainNavigator";

export default function App() {
  console.log(`Initialize app in ${process.env.NODE_ENV}`);
  return <MainNavigator />;
}
