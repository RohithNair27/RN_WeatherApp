import React from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const SearchBar = () => {
  const [Text, setText] = useState("");
  return (
    <View style={styles.view}>
      <FontAwesome name="search" size={24} color="black" style={styles.image} />
      <TextInput
        value={Text}
        style={styles.searchBar}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    top: 90,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#D3D3D3",
    opacity: 0.5,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  searchBar: {
    left: 10,
  },
});
export default SearchBar;
