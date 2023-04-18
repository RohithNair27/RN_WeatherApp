import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import api from "../axios/api";

const index = () => {
  const [City, setCity] = useState({});
  const [name, setName] = useState("London");

  const getCity = (text) => {
    setName(text);
  };

  useEffect(() => {
    data();
  }, [name]);

  const data = () =>
    api
      .get("/weather", {
        params: {
          q: name,
          appid: "2ffbdcc751a1c454028104013c645d41",
        },
      })
      .then((Response) => {
        setCity(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <View>
      <ImageBackground
        style={style.BackgroundImage}
        source={require("../assets/clouds.jpg")}
      >
        <SearchBar getText={getCity} />
        <View style={style.City_name}>
          <Text>{City.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  BackgroundImage: {
    width: 393,
    height: 780,
  },
  City_name: {
    top: 150,
    alignSelf: "center",
    fontSize: 30,
  },
});

export default index;
