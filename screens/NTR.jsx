import { StyleSheet, Text, View , Image, Button, Dimensions} from 'react-native';
import React from 'react';

{/*Calculated device width*/}

let deviceWidth = Dimensions.get("screen").width;

export default function Home({navigation}){
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/grad.jpg')} />
      <Image style={styles.logo} source={require('../assets/img/logo.png')}></Image>

 
      <Text style={{
        position: 'absolute',
        top: "30%",
        fontWeight: 'bold',
        fontSize: deviceWidth * 0.042,
        paddingLeft: 7,
      }}>"Nationwide Tactics and Readiness" </Text>

      <Text style={{
        textAlign: 'justify',
        position: 'absolute',
        top: "36%",
        marginLeft: 10,
        marginRight: 10,
        fontSize: deviceWidth * 0.040,
        paddingLeft: 5,
      }}
      
      >
        NTR also known as Nationwide Tactics and Readiness is a website that aims to inform, educate, and train individuals in the simplest form of first aid. The website provides step by step instructions on the different applications of bandages or splints on specific situations that requires the person to apply immediate care.
      </Text> 

      <Text style={{
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        color: "#fff",
        backgroundColor: '#333333',
        height: "7%",
        width: "100%",
        fontSize: deviceWidth * 0.033,
      }}
      >
      Application Development     
      
      </Text>
      
      <Text style={{
        textAlign: 'center',
        position: 'absolute',
        bottom: 7,
        color: "#fff",
        fontSize: deviceWidth * 0.033,
      }}
      >
      Group Members: Adlawan, Loro, Tan, Lopez, Brion     
      
      </Text>

        <View
            style={{
                position: 'absolute',
                top: "70%",
                left: "20%"
            }}

        >
          <Button
                color="#f194ff"
                title={"<<<Home"}
                onPress={() => navigation.navigate('Home')}
            />
        </View>

        <View
            style={{
                position: 'absolute',
                top: "70%",
                left: "60%"
            }}

        >
          <Button
                color="#f194ff"
                title={"NEXT>>>"}
                onPress={() => navigation.navigate('FirstAid')}
            />
        </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#cc33ff',
      alignItems: 'center',
      justifyContent: 'center',
  },

  logo:{
      width: "70%",
      height: "20%",
      position: 'absolute',
      top: "6%",
      left: "16%"
  },

});