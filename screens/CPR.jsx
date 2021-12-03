import { StyleSheet, Text, View , Image, Button} from 'react-native';
import React from 'react';

export default function CPR({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/grad.jpg')} />
            <Image
                style={styles.logo}

                source={require('../assets/img/hands.png')}>
            </Image>

            <Text style={{
                position: 'absolute',
                top: "28%",
                fontWeight: 'bold',
            }}>C.P.R</Text>

            <Text style={{
                position: 'absolute',
                top: "33%",
                left: "1%",
                marginLeft: 10,
                marginRight: 10,
                fontSize: 13,
                textAlign: "justify",
            }}

            >
                CardiopulCPR - or Cardiopulmonary Resuscitation - is an emergency lifesaving procedure performed when the heart stops beating. Immediate CPR can double or triple chances of survival after cardiac arrest.monary resuscitation (CPR) can help save a life during a cardiac or breathing emergency. However, even after training, remembering the CPR steps and administering them correctly can be a challenge. In order to help you help someone in need, we've created this simple step-by-step guide that you can print up and place on your refrigerator, in your car, in your bag or at your desk.
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
                        top: "68%",
                        left: "38%"
                    }}

                    >
                    <Button
                        color="#f194ff"
                        title={"<<<Home"}
                        onPress={() => navigation.navigate('Home')}
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
        width: "40%",
        height: "20%",
        position: 'absolute',
        top: "6%",
    },

});
// tinanggal ko yung sa export default kasi exported na syaaa sa line 4 (export default)