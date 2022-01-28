import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Professions({ navigation }) {
  var data = [];

  fetch("https://api.sampleapis.com/health/professions")
    .then((response) => response.json())
    .then((responseJson) => {
      data = responseJson;
    })
    .catch((error) => {
      console.log(error);
    });

  let mapdata = data.map((val, key) => {
    console.log(val.long_name);
    return (
      <View style={styles.item} key={key}>
        <Text>{val.array}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      {mapdata}
      <Text>wattup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
