import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import FirstAid from './screens/FirstAid';
import CPR from './screens/CPR';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName={"Home"}>

        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Welcome to N.T.R',
          headerStyle: {
              //kulay ditoo nung top bar
            backgroundColor: '#6666ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'light',
          },
        }}
      />

      <Stack.Screen
          name="FirstAid"
          component={FirstAid}
          options={{
            title: 'First Aid Information',
            headerStyle: {
              backgroundColor: '#6666ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'light',
            },
          }}
      />

      <Stack.Screen
          name="CPR"
          component={CPR}
          options={{
            title: 'CPR Information',
            headerStyle: {
              backgroundColor: '#6666ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'light',
            },
          }}
      />
    

    </Stack.Navigator>
   </NavigationContainer>
  );
}