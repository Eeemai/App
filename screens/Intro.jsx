import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import { render } from "react-dom";

export default function Intro({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#289ced" }}>
      <View>
        <Image
          source={require("../assets/img/logo.png")}
          style={{
            alignSelf: "center",
            backgroundColor: "#64bcf3",
            width: 300,
            height: 300,
            margin: 50,
            borderRadius: 200,
          }}
        />
      </View>

      <View style={{ paddingLeft: 50, paddingRight: 50 }}>
        <Image
          source={require("../assets/img/lightbulb.png")}
          style={{
            alignSelf: "center",
            width: 100,
            height: 100,
          }}
        />
      </View>

      <View style={{ paddingLeft: 50, paddingRight: 50, marginTop: 15 }}>
        <Button
          color="#605ca8"
          title={"LET'S GET STARTED"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
}
