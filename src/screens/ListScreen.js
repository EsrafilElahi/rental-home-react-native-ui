import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  FlatList,
  TextInput,
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

// dimensions
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const customFonts = {
  light: require("../../assets/fonts/Akshar-Light.ttf"),
  regular: require("../../assets/fonts/Akshar-Regular.ttf"),
  medium: require("../../assets/fonts/Akshar-Medium.ttf"),
  bold: require("../../assets/fonts/Akshar-Bold.ttf"),
};

const ListScreen = ({ navigation }) => {
  const [txt, setTxt] = useState("");
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={GlobalStyles.contiainer}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={GlobalStyles.profile}>
        <View style={GlobalStyles.loc}>
          <Text>Location</Text>
          <Text>canada</Text>
        </View>
        <View style={GlobalStyles.prof_view}>
          {/* <Image
            style={GlobalStyles.prof_img}
            source={require("../../assets/images/prof.jpg")}
          /> */}
          <Text>prof</Text>
        </View>
      </View>
      <View style={GlobalStyles.searching}>
        <View style={GlobalStyles.serach_input}>
          <TextInput value={txt} onChangeText={(newTxt) => setTxt(newTxt)} />
        </View>
        <View style={GlobalStyles.icon}>
          <Text>icon</Text>
        </View>
      </View>
      <View style={GlobalStyles.buy_rent}>
        {/* <FlatList data={houses} /> */}
      </View>
      <View style={GlobalStyles.tab_bar_container}>
        <View style={GlobalStyles.tab_bar}>
          <Text>Popular</Text>
          <Text>Recommended</Text>
          <Text>Nearest</Text>
        </View>
        <View style={GlobalStyles.detail_container}>
          <View style={GlobalStyles.img}>
            {/* <Image source={require("../../assets/images/prof.jpg")} /> */}
          </View>
          <View style={GlobalStyles.price}>
            <Text>Central Edmon</Text>
            <Text>$3.000.000</Text>
          </View>
          <View style={GlobalStyles.address}>
            <Text>118 Street, West Edmonton, Alberta</Text>
          </View>
          <View style={GlobalStyles.house_detail}>
            <View style={GlobalStyles.icon_txt}>
              <Text>Icon</Text>
              <Text>2</Text>
            </View>
            <View style={GlobalStyles.icon_txt}>
              <Text>Icon</Text>
              <Text>2</Text>
            </View>
            <View style={GlobalStyles.icon_txt}>
              <Text>Icon</Text>
              <Text>100m</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
