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

export default function FirstAid({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("../assets/img/grad.jpg")} />
        <Image
          style={styles.logo}
          source={require("../assets/img/AED.png")}
        ></Image>

        <Text
          style={{
            position: "absolute",
            top: "13%",
            fontWeight: "bold",
          }}
        >
          A.E.D
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "15%",

            marginLeft: 10,
            marginRight: 10,
            fontSize: 13,
            textAlign: "justify",
          }}
        >
          An AED, or automated external defibrillator, is used to help those
          experiencing sudden cardiac arrest.{"\n"}
          It's a sophisticated, yet easy-to-use, medical device that can analyze
          the heart's rhythm and, if necessary, deliver an electrical shock, or
          defibrillation, to help the heart re-establish an effective rhythm.
        </Text>

        <View
          style={{
            height: 10,
          }}
        />

        <Text
          style={{
            position: "absolute",
            top: "26%",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          A.E.D Steps
        </Text>

        <Image
          style={{
            width: "70%",
            height: "13%",
            position: "absolute",
            top: "28%",
            alignSelf: "center",
          }}
          source={require("../assets/img/AEDsteps.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: "41%",
            fontSize: 11,
            alignSelf: "center",
            color: "#fff",
            paddingLeft: 5,
            paddingRight: 5,
            height: "10%",
            flex: 1,
          }}
        >
          Automated external defibrillators can help save lives during sudden
          cardiac arrest. However, even after training, remembering the steps to
          use an AED the right way can be difficult. In order to help keep your
          skills sharp, we've created a quick step-by-step guide that you can
          print up and place on your refrigerator, in your car, in your bag or
          at your desk. This way, you can review the AED steps any time, at your
          convenience, and keep them fresh in your memory.
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "51%",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          Before Using A.E.D
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "54%",
            fontSize: 13,
            left: 14,
            color: "#000000",
            backgroundColor: "#FFFAF0",
            height: "36%",
            flex: 1,
          }}
        >
          1. Turn on the AED and follow {"\n"}the visual and/or audio prompts.
          {"\n\n\n\n\n"}2. Open the person's shirt and {"\n"}wipe his or her
          bare chest dry.{"\n\n\n\n\n"}3. Attach the AED pads, and plug {"\n"}in
          the connector (if necessary).{"\n\n\n\n\n"}4. Make sure no one is,
          including {"\n"}you, is touching the person.
        </Text>
        <Image
          style={{
            width: 120,
            height: 80,
            position: "absolute",
            top: "54%",
            right: 29,
          }}
          source={require("../assets/img/AED1.png")}
        ></Image>
        <Image
          style={{
            width: 120,
            height: 80,
            position: "absolute",
            top: "63%",
            right: 29,
          }}
          source={require("../assets/img/AED2.png")}
        ></Image>
        <Image
          style={{
            width: 120,
            height: 80,
            position: "absolute",
            top: "72%",
            right: 29,
          }}
          source={require("../assets/img/AED3.png")}
        ></Image>
        <Image
          style={{
            width: 120,
            height: 80,
            position: "absolute",
            top: "81%",
            right: 29,
          }}
          source={require("../assets/img/AED4.png")}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: -19,
            color: "#fff",
            backgroundColor: "#333333",
            height: "7%",
            width: "100%",
            fontSize: 13,
          }}
        >
          Application Development
        </Text>

        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: 5,
            color: "#fff",
            fontSize: 13,
          }}
        >
          Group Members: Adlawan, Loro, Tan, Lopez, Brion
        </Text>

        <View
          style={{
            position: "absolute",
            top: "91%",
            alignSelf: "center",
          }}
        >
          <Button
            color="#f194ff"
            title={"Home>>>"}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cc33ff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "30%",
    height: "11%",
    position: "absolute",
    top: "1%",
    backgroundColor: "#eaeae1",
  },
});
// tinanggal ko yung sa export default kasi exported na syaaa sa line 4 (export default)
