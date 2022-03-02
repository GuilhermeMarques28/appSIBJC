import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
