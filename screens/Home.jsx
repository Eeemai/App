import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

{
  /*Calculated device width*/
}
let deviceWidth = Dimensions.get("screen").width;
let prop;

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    prop = props;
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJq_ziO9KaSX6vCdbnAqn7egojPy5HmezIvhnggK45uyy3WTmHoN2KrksspYmu-C4ROY&usqp=CAU",
          title: "First-Aid",
          text: "First aid is the first and immediate assistance given ...",
          location: "FirstAid",
        },
        {
          image:
            "https://i.pinimg.com/originals/16/5a/e8/165ae8d3ccfc753771a302ad4cb7f8cb.png",
          title: "C.P.R",
          text: "Cardiopulmonary resuscitation (CPR) is a lifesaving technique ...",
          location: "CPR",
        },
        {
          image:
            "https://us.123rf.com/450wm/martialred/martialred1803/martialred180300082/98186993-red-automated-external-defibrillator-aed-sign-with-heart-and-electricity-symbol-flat-vector-icon.jpg?ver=6",
          title: "A.E.D",
          text: "An AED, or automated external defibrillator, is used to help...",
          location: "AED",
        },
        {
          image:
            "https://i.pinimg.com/originals/d2/8b/50/d28b50cfdc4d75a2cdd511f326311c7d.jpg",
          title: "Professions",
          text: "Click to see a list of possible professions related to health",
          location: "Professions",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    const { navigate } = prop.navigation;

    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          height: 300,
          padding: 10,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        />
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
        <View
          style={{
            margin: 10,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <Button
            color="#026eb7"
            title={"Find out More>>>"}
            onPress={() => navigate(item.location)}
          />
        </View>
      </View>
    );
  }

  render() {
    const { navigate } = prop.navigation;

    return (
      <SafeAreaView
        style={{
          flex: 1,

          //alignItems: "center",
        }}
      >
        <View style={styles.container}>
          {/*background gradient*/}
          <Image source={require("../assets/img/grad.jpg")} />

          {/*Banner*/}
          <Image
            style={styles.banner}
            source={require("../assets/img/banner.png")}
          />
        </View>

        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            position: "absolute",
            top: "21%",
            margin: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            What is NTR?
          </Text>

          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              marginTop: 10,
            }}
          >
            NTR also known as Nationwide Tactics and Readiness is a website that
            aims...
          </Text>

          <View
            style={{
              top: 10,
            }}
          >
            <Button
              color="#055c91"
              title={">>Full Description<<"}
              onPress={() => navigate("NTR")}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -65,
          }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            backgroundColor: "#055c91",
            height: 30,
          }}
        >
          <Text
            style={{ paddingLeft: 10, paddingRight: 20, fontSize: 18 }}
            onPress={() => navigate("Home")}
          >
            Home
          </Text>

          <Text
            style={{ paddingLeft: 20, paddingRight: 15, fontSize: 18 }}
            onPress={() => navigate("NTR")}
          >
            About
          </Text>
          <Text
            style={{ paddingLeft: 20, paddingRight: 10, fontSize: 18 }}
            onPress={() => navigate("Home")}
          >
            Contact Us
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91f2ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },

  banner: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: 0,
  },

  footer: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
