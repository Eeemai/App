import React from "react";
import { StatusBar } from "react-native";
import Intro from "./screens/Intro";
import Home from "./screens/Home";
import NTR from "./screens/NTR";
import FirstAid from "./screens/FirstAid";
import CPR from "./screens/CPR";
import AED from "./screens/AED";
import Professions from "./screens/Professions";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator initialRouteName={"Intro"}>

        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="NTR"
          component={NTR}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="FirstAid"
          component={FirstAid}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CPR"
          component={CPR}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen
          name="AED"
          component={AED}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Professions"
          component={Professions}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}