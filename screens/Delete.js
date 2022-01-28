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

function Delete({ navigation }) {
  const [professionID, setProfessionID] = useState("");

  const checkTextInput = () => {
    if (!professionID.trim()) {
      alert("Invalid input");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.DelBtn}
        onPress={() => {
          if (checkTextInput()) {
            navigation.navigate("deleteAPI", {
              professionID: professionID,
            });
            setProfessionID("");
          }
        }}
      >
        <Text style={styles.nxtbtntxt}>Delete</Text>
      </Pressable>

      <TextInput
        placeholder="Profession ID"
        maxLength={4}
        style={styles.textinput}
        keyboardType="number-pad"
        value={professionID}
        onChangeText={(id) => setProfessionID(id)}
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

  DelBtn: {
    width: "40%",
    position: "absolute",
    bottom: "30%",
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
export default Delete;
