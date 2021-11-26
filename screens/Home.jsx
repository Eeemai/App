import { StyleSheet, Text, View , Image, Button} from 'react-native';
import React from 'react';

export default function Home({navigation}){
  return (
    <View style={styles.container}>
      <Image 
      style={styles.banner}
     
      source={require('../assets/banner.png')}>
      </Image>
 
      <Text style={{
        position: 'absolute',
        top: "21%",
        fontWeight: 'bold',
      }}>Nationwide Tactics and Readiness </Text>

      <Text style={{
        textAlign: 'justify',
        position: 'absolute',
        top: "25%",
        left: "3%",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
      }}
      
      >
        NTR also known as Nationwide Tactics and Readiness is a website that aims to inform, educate, and train individuals in the simplest form of first aid. The website provides step by step instructions on the different applications of bandages or splints on specific situations that requires the person to apply immediate care.
      </Text>  
    
      <Text style={{
        position: 'absolute',
        top: "45%",
        left: "2%",
        fontWeight: 'bold',
      }}>First-Aid </Text>
      
      <Text style={{
        textAlign: 'justify',
        position: 'absolute',
        top: "49%",
        left: "3%",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
      }}
      >
        First aid is the first and immediate assistance given to any person suffering from either a minor or serious illness or injury, with care provided to preserve life, prevent the condition from worsening, or to promote recovery.
      </Text>  
     
      <Text style={{
        position: 'absolute',
        top: "70%",
        left: "2%",
        fontWeight: 'bold',
      }}>C.P.R </Text>

      <Text style={{
        textAlign: 'justify',
        position: 'absolute',
        top: "74%",
        left: "2%",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
      }}
      >
        Cardiopulmonary resuscitation (CPR) is a lifesaving technique that's useful in many emergencies, such as a heart attack or near drowning, in which someone's breathing or heartbeat has stopped.
      </Text>

      <Text style={{
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        color: "#fff",
        backgroundColor: '#333333',
        height: "7%",
        width: "100%",
        fontSize: 13,
      }}
      >
      Application Development     
      
      </Text>
      
      <Text style={{
        textAlign: 'center',
        position: 'absolute',
        bottom: 7,
        color: "#fff",
        fontSize: 13,
      }}
      >
      Group Members: Adlawan, Loro, Tan, Lopez, Brion     
      
      </Text>

        <View

            style={{
                position: 'absolute',
                top: "64%",
                left: "28%"
            }}

        >
            <Button
                color="#f194ff"
                title={"Find out More>>>"}
                onPress={() => navigation.navigate('FirstAid')}
            />
        </View>


        <View
            style={{
                position: 'absolute',
                top: "86%",
                left: "28%"
            }}

        >
          <Button
                color="#f194ff"
                title={"Find out More>>>"}
                onPress={() => navigation.navigate('CPR')}
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
  
  banner:{
    width: "100%",
    height: "20%",
    position: 'absolute',
    top: 0,
  },
  
  footer:{
    flex: 1,
    backgroundColor: '#333333',
  }
  
});