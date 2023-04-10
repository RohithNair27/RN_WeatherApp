import React from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import SearchBar from "../Components/SearchBar";

const index = () => {
  return (
    <View>
      <ImageBackground
        style={style.BackgroundImage}
        source={require("../assets/clouds.jpg")}
      >
        <SearchBar />
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  BackgroundImage: {
    width: 393,
    height: 780,
  },
});

export default index;
