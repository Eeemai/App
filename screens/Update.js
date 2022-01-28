import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
} from "react-native";

let devicewidth = Dimensions.get("window").width;
let fontSizem = 0.23;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontWelcomeSize = devicewidth * fontSizem;

function Update({ navigation }) {
  const [professionID, setProfessionID] = useState("");
  const [professionName, setProfessionName] = useState("");

  const checkTextInput = () => {
    if (!professionID.trim() && !professionName.trim()) {
      alert("Invalid inputs");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.UpdateBtn}
        onPress={() => {
          if (checkTextInput()) {
            navigation.navigate("updateAPI", {
              professionID: professionID,
              professionName: professionName,
            });
            setProfessionName("");
            setProfessionID("");
          } else {
            setProfessionName("");
            setProfessionID("");
          }
        }}
      >
        <Text style={styles.nxtbtntxt}>Update</Text>
      </Pressable>

      <TextInput
        placeholder="Profession ID"
        maxLength={4}
        keyboardType="number-pad"
        style={styles.textinput}
        value={professionID}
        onChangeText={(id) => setProfessionID(id)}
      />
      <View
        style={{
          width: "60%",
          borderBottomWidth: 1,
          marginBottom: 20,
        }}
      ></View>
      <TextInput
        placeholder="New profession name"
        maxLength={13}
        style={styles.textinput}
        value={professionName}
        onChangeText={(name) => setProfessionName(name)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
  },

  container2: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    zIndex: 1000,
  },

  textinput: {
    height: 50,
    width: "80%",
    borderWidth: 3,
    backgroundColor: "#fff",
    paddingLeft: "5%",
    fontSize: fontWelcomeSize / 4.5,
    color: "#010101",
    marginBottom: "7%",
    zIndex: 99,
  },

  postBtn: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  presseble: {
    borderRadius: 100,
    width: "51%",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 50,
    marginBottom: 10,
    elevation: 5,
    backgroundColor: "#fff",
  },

  UpdateBtn: {
    width: "40%",
    position: "absolute",
    bottom: "25%",
    right: "30%",
    elevation: 21,
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    borderRadius: 200,
  },

  nxtbtntxt: {
    color: "#c9c9c9",
    fontSize: fontWelcomeSize / 2,
  },
});
export default Update;
