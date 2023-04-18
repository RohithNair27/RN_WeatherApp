import React from "react";
import axios from "axios";
// axios
//   .get("https://api.openweathermap.org/data/2.5/weather", {
//     params: {
//       q: props.place,
//       appid: "2ffbdcc751a1c454028104013c645d41",
//     },
//   })
//   .then((response) => {
//     return response.data;
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
