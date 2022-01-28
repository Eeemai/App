import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackHandler, ScrollView, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

{
  /*importing variables of configurations*/
}
import config from "../config/config";

function GetData({ route, navigation }) {
  let baseURL = config.baseURL;

  {
    /*Handle back button*/
  }
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.replace("API");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const [professions, setProfessions] = useState([]);
  const [professionsb, setProfessionsb] = useState({});
  const [oneDataOnly, setOneDataOnly] = useState(false);

  if (route.params.id === "") {
    useEffect(() => {
      axios
        .get(baseURL)
        .then((res) => {
          setProfessions(res.data);
          console.log("get completed");
        })
        .catch((err) => {
          setProfessions({ id: 1, name: "NO SUCH DATA" });
        });
    }, []);
  } else {
    useEffect(() => {
      axios
        .get(`${baseURL}/${route.params.id}`)
        .then((res) => {
          setOneDataOnly(true);
          setProfessionsb(res.data);
          console.log(res.data);
        })
        .catch((res) => {
          setProfessionsb({ id: route.params.id, long_name: "NO SUCH DATA" });
        });
    }, []);
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          borderBottomColor: "#000",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            textAlign: "center",
            width: "10%",
            textAlignVertical: "center",
            borderRightColor: "#000",
            borderRightWidth: 1,
          }}
        >
          ID
        </Text>
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            width: "90%",
            paddingLeft: "5%",
          }}
        >
          Profession name
        </Text>
      </View>
      {oneDataOnly ? (
        <ScrollView style={{ zIndex: 12 }}>
          <View
            key={professionsb.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
            }}
          >
            <Text
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                textAlign: "center",
                width: "10%",
                textAlignVertical: "center",
                borderRightColor: "#000",
                borderRightWidth: 1,
                borderBottomColor: "#000",
                borderBottomWidth: 1,
              }}
            >
              {professionsb.id}
            </Text>
            <Text
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                width: "90%",
                paddingLeft: "5%",
                borderBottomColor: "#000",
                borderBottomWidth: 1,
              }}
            >
              {professionsb.long_name}
            </Text>
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={{ zIndex: 12 }}>
          {professions.map((profession) => {
            return (
              <View
                key={profession.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Text
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    textAlign: "center",
                    width: "10%",
                    textAlignVertical: "center",
                    borderRightColor: "#000",
                    borderRightWidth: 1,
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                  }}
                >
                  {profession.id}
                </Text>
                <Text
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    width: "90%",
                    paddingLeft: "5%",
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                  }}
                >
                  {profession.long_name}
                </Text>
              </View>
            );
          })}
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: 20,
              paddingTop: 20,
              paddingBottom: 20,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            All data are displayed.
          </Text>
        </ScrollView>
      )}
    </View>
  );
}

export default GetData;
