import { StyleSheet, Text, View , Image, Button} from 'react-native';
import React from 'react';

export default function CPR({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}

                source={require('../assets/hands.png')}>
            </Image>

            <Text style={{
                position: 'absolute',
                top: "21%",
                fontWeight: 'bold',
            }}>C.P.R</Text>

            <Text style={{
                position: 'absolute',
                top: "25%",
                marginLeft: 10,
                marginRight: 10,
            }}

            >
                CPR - or Cardiopulmonary Resuscitation - is an emergency lifesaving procedure performed when the heart stops beating. Immediate CPR can double or triple chances of survival after cardiac arrest.
            </Text>




            <Text style={{
                textAlign: 'center',
                position: 'absolute',
                bottom: 0,
                color: "#fff",
                backgroundColor: '#333333',
                height: "10%",
                width: "100%",
            }}
            >
                Application Development

            </Text>

            <Text style={{
                textAlign: 'center',
                position: 'absolute',
                bottom: 7,
                color: "#fff",

            }}
            >
                Group Members: Adlawan, Loro, Tan, Lopez, Brion

            </Text>


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
        width: "40%",
        height: "20%",
        position: 'absolute',
        top: 0,
    },


});
// tinanggal ko yung sa export default kasi exported na syaaa sa line 4 (export default)