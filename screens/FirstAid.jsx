import { StyleSheet, Text, View , Image, Button, Dimensions} from 'react-native';
import React from 'react';

{/*Calculated device width*/}
let deviceWidth = Dimensions.get("screen").width;

export default function FirstAid({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/grad.jpg')} />
            <Image
                style={styles.logo}

                source={require('../assets/img/red-cross.png')}>
            </Image>

            <Text style={{
                position: 'absolute',
                top: "30%",
                fontWeight: 'bold',
            }}>FIRST-AID</Text>

            <Text style={{
                position: 'absolute',
                top: "34%",
                left: "2%",
                marginLeft: 10,
                marginRight: 10,
                fontSize: deviceWidth * 0.036,
                textAlign: 'justify',
            }}

            >
                >> When you provide basic medical care to someone experiencing a sudden injury or illness, it’s known as first aid.
            </Text>
            <View style={{
                height: 10
            }}/>

            <Text style={{
                position: 'absolute',
                top: "44%",
                left: "2%",
                marginLeft: 10,
                marginRight: 10,
                fontSize: deviceWidth * 0.036,
                textAlign: 'justify',
            }}

            >
                >> In some cases, first aid consists of the initial support provided to someone in the middle of a medical emergency. This support might help them survive until professional help arrives.
            </Text>

            <Text style={{
                position: 'absolute',
                top: "59%",
                left: "2%",
                marginLeft: 10,
                marginRight: 10,
                fontSize: deviceWidth * 0.036,
                textAlign: 'justify',
            }}

            >
                >> In other cases, first aid consists of the care provided to someone with a minor injury. For example, first aid is often all that’s needed to treat minor burns, cuts, and insect stings.
            </Text>


            <Text style={{
                textAlign: 'center',
                position: 'absolute',
                bottom: 0,
                color: "#fff",
                backgroundColor: '#333333',
                height: "7%",
                width: "100%",
                fontSize: deviceWidth * 0.035,
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
                        top: "74%",
                        left: "38%"
                    }}

                    >
                    <Button
                    
                        color="#f194ff"
                        title={"<<< Home"}
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
        position: 'absolute',
        width: "40%",
        height: "20%",
        top: "9%",
    },

});
// tinanggal ko yung sa export default kasi exported na syaaa sa line 4 (export default)