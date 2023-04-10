import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { StyleSheet } from "react-native";
import index from "./Screens/Screens";

const navigator = createStackNavigator(
  {
    firstpage: index,
  },
  {
    initialRouteName: "firstpage",
    defaultNavigationOptions: {
      title: "Weather App",
      headerTransparent: true,
      headerTitleStyle: {
        alignSelf: "center",
        right: 10,
        fontSize: 24,
        color: "#333",
      },
    },
  }
);

const styles = StyleSheet.create({
  title: {},
});

export default createAppContainer(navigator);
