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
          source={require("../assets/img/red-cross.png")}
        ></Image>

        <Text
          style={{
            position: "absolute",
            top: "13%",
            fontWeight: "bold",
          }}
        >
          FIRST-AID
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
          When you provide basic medical care to someone experiencing a sudden
          injury or illness, it’s known as first aid.{"\n"}
          In some cases, first aid consists of the initial support provided to
          someone in the middle of a medical emergency. This support might help
          them survive until professional help arrives.{"\n"}
          In other cases, first aid consists of the care provided to someone
          with a minor injury. For example, first aid is often all that’s needed
          to treat minor burns, cuts, and insect stings.
        </Text>

        <View
          style={{
            height: 10,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: "33%",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          3 Steps for Emergency Situations
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "35%",
            paddingLeft: 5,
            paddingRight: 5,
            color: "#fff",
          }}
        >
          If you encounter an emergency situation, follow these three basic
          steps:
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "40%",
            alignSelf: "flex-start",
            fontWeight: "bold",
            color: "#fff",
            paddingLeft: 5,
            backgroundColor: "#778899",
            width: 360,
            height: 280,
          }}
        >
          Check the scene for danger.
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "42%",
            paddingLeft: 2,
            paddingRight: 3,
            color: "#fff",
          }}
        >
          Look for anything that might be dangerous, like signs of fire, falling
          debris, or violent people. If your safety is at risk, remove yourself
          from the area and call for help.
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "48%",
            alignSelf: "flex-start",
            fontWeight: "bold",
            color: "#fff",
            paddingLeft: 5,
          }}
        >
          Call for medical help, if needed
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "50%",
            paddingLeft: 2,
            paddingRight: 3,
            color: "#fff",
          }}
        >
          If you suspect the sick or injured person needs emergency medical
          care, tell a nearby person to call 911 or the local number for
          emergency medical services. If you’re alone, make the call yourself.
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "58%",
            alignSelf: "flex-start",
            fontWeight: "bold",
            color: "#fff",
            paddingLeft: 5,
          }}
        >
          Provide Care
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "60%",
            paddingLeft: 2,
            paddingRight: 3,
            color: "#fff",
          }}
        >
          If you can do so safely, remain with the sick or injured person until
          professional help arrives. Cover them with a warm blanket, comfort
          them, and try to keep them calm. If you have basic first aid skills,
          try to treat any potentially life-threatening injuries they have.
        </Text>

        <Image
          style={{
            width: "70%",
            height: "13%",
            position: "absolute",
            top: "70%",
            alignSelf: "center",
          }}
          source={require("../assets/img/firstaidkit.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: "83%",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          First-Aid-Kit
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "85%",
            paddingLeft: 2,
            paddingRight: 3,
            color: "#fff",
            fontSize: 12,
          }}
        >
          You never know when you might need to provide basic first aid. To
          prepare for the unpredictable, considering storing a well-stocked
          first aid kit in your home and car. It’s also a good idea to have a
          first aid kit available at work.
        </Text>
        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: -35,
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
            bottom: -2,
            color: "#fff",
            fontSize: 13,
          }}
        >
          Group Members: Adlawan, Loro, Tan, Lopez, Brion
        </Text>

        <View
          style={{
            position: "absolute",
            top: "93%",
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
