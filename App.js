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

{
  /*importing for API screens*/
}
import API from "./screens/API";
import Post from "./screens/Post";
import Get from "./screens/Get";
import Update from "./screens/Update";
import Delete from "./screens/Delete";

{
  /*importing for API components */
}
import GetData from "./components/GetData";
import PostData from "./components/PostData";
import UpdateData from "./components/UpdateData";
import DeleteData from "./components/DeleteData";

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

        {/*API Screens and components*/}
        <Stack.Screen
          name="API"
          component={API}
          options={{ headerShown: false, animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="postScreen"
          component={Post}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="postAPI"
          component={PostData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="getScreen"
          component={Get}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="getAPI"
          component={GetData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="updateScreen"
          component={Update}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="updateAPI"
          component={UpdateData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deleteScreen"
          component={Delete}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deleteAPI"
          component={DeleteData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
