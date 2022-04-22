import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Button,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";

// style
import GlobalStyles from "../styles/HomeStyles";

// dimensions
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const ImgRender = ({ item, index }) => {
  return (
    <View>
      <Text style={GlobalStyles.imgIndex}>{`${index + 1} / 3`}</Text>
      <Image
        style={[
          { width: screenWidth, height: screenHeight / 2 },
          GlobalStyles.img,
        ]}
        source={item}
      />
    </View>
  );
};

export default ImgRender;
