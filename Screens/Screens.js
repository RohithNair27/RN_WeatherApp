import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import api from "../axios/api";
import {
  FontAwesome5,
  Feather,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";

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
          units: "metric",
        },
      })
      .then((Response) => {
        setCity(Response.data);
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

        {/* name of the city */}
        <Text style={style.City_name}>{City.name}</Text>
        <View style={{ padding: 20 }}>
          {/* temperature */}
          <View style={style.all_view}>
            <FontAwesome5
              name="temperature-high"
              size={60}
              color="black"
              style={{ alignSelf: "center" }}
            />
            {City && City.main && City.main.temp && (
              <Text style={style.Info_Text}>{City.main.temp}</Text>
            )}
          </View>
          {/* windspeed */}
          <View style={style.all_view}>
            <Feather
              name="wind"
              size={60}
              color="black"
              style={{ alignSelf: "center" }}
            />
            {City && City.wind && City.wind.speed && (
              <Text style={style.Info_Text}>{City.wind.speed}</Text>
            )}
          </View>
          {/* humidity */}
          <View style={style.all_view_right}>
            <Fontisto
              name="blood-drop"
              size={60}
              color="black"
              style={{ alignSelf: "center" }}
            />
            {City && City.main && City.main.humidity && (
              <Text style={style.Info_Text}>{City.main.humidity}</Text>
            )}
          </View>
          <View style={style.all_view_right}>
            <MaterialIcons
              name="speed"
              size={60}
              color="black"
              style={{ alignSelf: "center" }}
            />
            {City && City.main && City.main.pressure && (
              <Text style={style.Info_Text}>{City.main.pressure}</Text>
            )}
          </View>
        </View>
        <View style={style.City_name}></View>
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
    top: 170,
    alignSelf: "center",
    fontSize: 70,

    flex: 1,
    // flexWrap: "wrap",
  },
  all_view: {
    top: 250,

    padding: 10,
    maxWidth: 150,
  },
  all_view_right: {
    top: 30,
    padding: 10,
    maxWidth: 150,
    left: 170,

    bottom: 70,
  },
  Info_Text: {
    fontSize: 20,
    alignSelf: "center",
  },
});

export default index;
