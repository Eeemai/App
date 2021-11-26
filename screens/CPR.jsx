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
                Cardiopulmonary resuscitation (CPR) can help save a life during a cardiac or breathing emergency. However, even after training, remembering the CPR steps and administering them correctly can be a challenge. In order to help you help someone in need, we've created this simple step-by-step guide that you can print up and place on your refrigerator, in your car, in your bag or at your desk.
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