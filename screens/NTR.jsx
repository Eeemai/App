import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";

{
  /*Calculated device width*/
}

let deviceWidth = Dimensions.get("screen").width;

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("../assets/img/grad.jpg")} />
        <Image
          style={styles.logo}
          source={require("../assets/img/logo.png")}
        ></Image>

        <Text
          style={{
            position: "absolute",
            top: "15%",
            fontWeight: "bold",
            fontSize: deviceWidth * 0.042,
            paddingLeft: 7,
          }}
        >
          "Nationwide Tactics and Readiness"{" "}
        </Text>

        <Text
          style={{
            textAlign: "justify",
            position: "absolute",
            top: "20%",
            marginLeft: 10,
            marginRight: 10,
            fontSize: deviceWidth * 0.04,
            paddingLeft: 5,
          }}
        >
          NTR also known as Nationwide Tactics and Readiness is a website that
          aims to inform, educate, and train individuals in the simplest form of
          first aid. The website provides step by step instructions on the
          different applications of bandages or splints on specific situations
          that requires the person to apply immediate care.
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "40%",
            fontWeight: "bold",
            fontSize: deviceWidth * 0.042,
            paddingLeft: 7,
          }}
        >
          OBJECTIVES
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "44%",

            fontSize: deviceWidth * 0.042,
            paddingLeft: 7,
          }}
        >
          1. To provide informative materials to educate individuals on the
          importance of First Aid.{"\n\n"}
          2. To ensure each person knows the proper application of First Aid.
          {"\n\n"}
          3. To assess the knowledge of the person the person using the website.
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "63%",
            fontWeight: "bold",
            fontSize: deviceWidth * 0.042,
            paddingLeft: 7,
            color: "#fff",
          }}
        >
          This Application is for educational purposes only
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "66%",
            fontSize: deviceWidth * 0.042,
            paddingLeft: 7,
            color: "#fff",
          }}
        >
          All rights will be given to the owners.{"\n\n"}
          All references and sources will be linked below:
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "73%",
            fontSize: deviceWidth * 0.042,
            paddingLeft: 7,
            color: "#070bf0",
          }}
        >
          https://www.wikihow.com/Do-CPR{"\n"}
          https://www.wikihow.com/Use-a-Defibrillator{"\n"}
          https://www.redcross.org/{"\n"}
          https://www.healthline.com/health/first-aid
        </Text>

        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: 0,
            color: "#fff",
            backgroundColor: "#333333",
            height: "7%",
            width: "100%",
            fontSize: deviceWidth * 0.033,
          }}
        >
          Application Development
        </Text>

        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: 7,
            color: "#fff",
            fontSize: deviceWidth * 0.033,
          }}
        >
          Group Members: Adlawan, Loro, Tan, Lopez, Brion
        </Text>

        <View
          style={{
            position: "absolute",
            top: "86%",
            left: "40%",
          }}
        >
          <Button
            color="#f194ff"
            title={"<<<Home"}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc33ff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "70%",
    height: "20%",
    position: "absolute",
    top: "-5%",
    left: "16%",
  },
});
