import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Pressable, BackHandler } from "react-native";

function API({ navigation }) {
  {
    /*Handle back button*/
  }
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.replace("Home");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          width: "90%",
          marginBottom: "20%",
          textAlign: "center",
        }}
      >
        Health Professions List
      </Text>

      {/*Buttons*/}

      {/*GET Button*/}
      <Pressable
        style={styles.presseble}
        onPress={() => {
          navigation.navigate("getScreen");
        }}
      >
        <Text style={styles.optionBtn}>GET</Text>
      </Pressable>

      {/*POST Button*/}
      <Pressable
        style={styles.presseble}
        onPress={() => navigation.navigate("postScreen")}
      >
        <Text style={styles.optionBtn}>POST</Text>
      </Pressable>

      {/*UPDATE Button*/}
      <Pressable
        style={styles.presseble}
        onPress={() => navigation.navigate("updateScreen")}
      >
        <Text style={styles.optionBtn}>UPDATE</Text>
      </Pressable>

      {/*DELETE Button*/}
      <Pressable
        style={styles.presseble}
        onPress={() => {
          navigation.navigate("deleteScreen");
        }}
      >
        <Text style={styles.optionBtn}>DELETE</Text>
      </Pressable>
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

  optionBtn: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    color: "#c9c9c9",
  },

  presseble: {
    borderRadius: 100,
    width: "51%",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 25,
    elevation: 5,
    backgroundColor: "#000",
  },
});

export default API;
