import { StyleSheet, Text, View , Image, Button} from 'react-native';
import React from 'react';

export default function FirstAid({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}

                source={require('../assets/red-cross.png')}>
            </Image>

            <Text style={{
                position: 'absolute',
                top: "21%",
                fontWeight: 'bold',
            }}>FIRST-AID</Text>

            <Text style={{
                position: 'absolute',
                top: "25%",
                marginLeft: 10,
                marginRight: 10,
            }}

            >
                When you provide basic medical care to someone experiencing a sudden injury or illness, it’s known as first aid.
            </Text>
            <View style={{
                height: 10
            }}/>

            <Text style={{
                position: 'absolute',
                top: "35%",
                marginLeft: 10,
                marginRight: 10,
            }}

            >
                In some cases, first aid consists of the initial support provided to someone in the middle of a medical emergency. This support might help them survive until professional help arrives.
            </Text>

            <Text style={{
                position: 'absolute',
                top: "48%",
                marginLeft: 10,
                marginRight: 10,
            }}

            >
                In other cases, first aid consists of the care provided to someone with a minor injury. For example, first aid is often all that’s needed to treat minor burns, cuts, and insect stings.
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