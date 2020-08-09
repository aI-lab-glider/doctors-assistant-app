import React from "react";
import MainNavigator from "./src/modules/navigation/MainNavigator";
import PatientsContextProvider from "./src/modules/context/PatientsContext";

export default function App() {
  console.log(`Initialize app in ${process.env.NODE_ENV}`);
  return (
    <PatientsContextProvider>
      <MainNavigator />
    </PatientsContextProvider>
  );
}
