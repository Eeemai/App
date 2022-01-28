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

export default function CPR({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("../assets/img/grad.jpg")} />
        <Image
          style={styles.logo}
          source={require("../assets/img/hands.png")}
        ></Image>

        <Text
          style={{
            position: "absolute",
            top: "20%",
            fontWeight: "bold",
          }}
        >
          C.P.R
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "22%",
            left: "1%",
            marginLeft: 10,
            marginRight: 10,
            fontSize: deviceWidth * 0.035,
            textAlign: "justify",
          }}
        >
          CardiopulCPR - or Cardiopulmonary Resuscitation - is an emergency
          lifesaving procedure performed when the heart stops beating. Immediate
          CPR can double or triple chances of survival after cardiac
          arrest.monary resuscitation (CPR) can help save a life during a
          cardiac or breathing emergency. However, even after training,
          remembering the CPR steps and administering them correctly can be a
          challenge. In order to help you help someone in need, we've created
          this simple step-by-step guide that you can print up and place on your
          refrigerator, in your car, in your bag or at your desk.
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "40%",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          Before Giving C.P.R
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "43%",
            fontSize: 13,
            left: 14,
            color: "#000000",
            backgroundColor: "#FFFAF0",
            height: "10%",
            flex: 1,
          }}
        >
          1. Check the scene and the person.{"\n"} Make sure the scene is safe,
          then {"\n"}tap the person on the shoulder and {"\n"}shout "Are you
          OK?" to ensure that {"\n"}the person needs help.
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "54%",
            fontSize: 13,
            right: 29,
            color: "#000000",
            backgroundColor: "#FFFAF0",
            height: "10%",
            flex: 1,
          }}
        >
          2. Call 911 for assistance. If it's {"\n"}evident that the person
          needs help, {"\n"}call (or ask a bystander to call){"\n"} 911, then
          send someone to get an {"\n"}AED.
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "65%",
            fontSize: 13,
            left: 14,
            color: "#000000",
            backgroundColor: "#FFFAF0",
            height: "10%",
            flex: 1,
          }}
        >
          3. Open the airway. With the{"\n"} person lying on his or her back,
          {"\n"} tilt the head back slightly to lift {"\n"}the chin.
        </Text>

        <Text
          style={{
            position: "absolute",
            top: "76%",
            fontSize: 13,
            right: 29,
            color: "#000000",
            backgroundColor: "#FFFAF0",
            height: "10%",
            flex: 1,
          }}
        >
          4. Check for breathing.Listen {"\n"}carefully,for no more than
          {"\n"}10 seconds, for sounds of breathing. {"\n"}(Occasional gasping
          sounds do not {"\n"}equate to breathing.)
        </Text>

        <Image
          style={{
            width: "30%",
            height: "10%",
            position: "absolute",
            top: "43%",
            right: 29,
          }}
          source={require("../assets/img/CPR1.png")}
        ></Image>

        <Image
          style={{
            width: "30%",
            height: "10%",
            position: "absolute",
            top: "54%",
            left: 14,
          }}
          source={require("../assets/img/CPR2.png")}
        ></Image>

        <Image
          style={{
            width: "30%",
            height: "10%",
            position: "absolute",
            top: "65%",
            right: 29,
          }}
          source={require("../assets/img/CPR3.png")}
        ></Image>

        <Image
          style={{
            width: "30%",
            height: "10%",
            position: "absolute",
            top: "76%",
            left: 14,
          }}
          source={require("../assets/img/CPR4.png")}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: -11,
            color: "#fff",
            backgroundColor: "#333333",
            height: "5%",
            width: "100%",
            fontSize: deviceWidth * 0.035,
          }}
        >
          Application Development
        </Text>

        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: 1,
            color: "#fff",
            fontSize: deviceWidth * 0.033,
          }}
        >
          Group Members: Adlawan, Loro, Tan, Lopez, Brion
        </Text>

        <View
          style={{
            position: "absolute",
            top: "92%",
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
    flex: 1,
    backgroundColor: "#cc33ff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "50%",
    height: "18%",
    position: "absolute",
    top: "1%",
  },
});
// tinanggal ko yung sa export default kasi exported na syaaa sa line 4 (export default)
