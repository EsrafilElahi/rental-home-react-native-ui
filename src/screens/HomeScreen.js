import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  FlatList,
  Button,
  TouchableHighlight,
  Pressable,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";

// styles
import GlobalStyles from "../styles/HomeStyles";
import Colors from "../styles/Colors";

import ImgRender from "../components/ImgRender";

// dimensions
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
let flatList;

const customFonts = {
  light: require("../../assets/fonts/Akshar-Light.ttf"),
  regular: require("../../assets/fonts/Akshar-Regular.ttf"),
  medium: require("../../assets/fonts/Akshar-Medium.ttf"),
  bold: require("../../assets/fonts/Akshar-Bold.ttf"),
};

function infiniteScroll(data) {
  const numberOfData = data.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + screenWidth;
    else {
      scrollValue = 0;
      scrolled = 0;
    }

    // this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
  }, 3000);
}

const HomeScreen = ({ navigation }) => {
  const [Images, setImages] = useState();
  const [isFontLoaded] = useFonts(customFonts);
  let data = [0, 1, 2];
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, screenWidth);

  const loadImages = async () => {
    setImages([
      await require("../../assets/images/1.jpg"),
      await require("../../assets/images/2.jpg"),
      await require("../../assets/images/3.jpg"),
    ]);
  };

  useEffect(() => {
    loadImages();
    infiniteScroll(data);
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />

      <View style={GlobalStyles.carousel}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          // ref={(flatList) => {
          //   this.flatList = flatList;
          // }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
            // { listener: (event) => console.log(event) },
          ])}
          data={Images}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <ImgRender item={item} index={index} />
          )}
        />

        <View style={GlobalStyles.indicators}>
          {data?.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 4,
                  width: 28,
                  backgroundColor: "#595959",
                  marginVertical: 20,
                  marginHorizontal: 10,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>

      <View style={GlobalStyles.body}>
        <View>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 35,
              paddingEnd: 75,
              flexGrow: 1,
            }}
          >
            Find Your Sweet Home
          </Text>
          <Text
            style={{
              color: "red",
              fontFamily: "light",
              marginTop: 5,
              paddingEnd: 75,
              flexGrow: 1,
            }}
          >
            visit by one click and save your ropm to enjoy the travel in the
            home sweet
          </Text>
        </View>
        <View style={{ marginVertical: 35, flexGrow: 1 }}>
          <Pressable
            style={GlobalStyles.btnContainer}
            onPress={() => navigation.navigate("List")}
          >
            <Text style={GlobalStyles.btn}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
