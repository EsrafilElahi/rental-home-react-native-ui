import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
  TouchableHighlight,
  Pressable,
  StatusBar,
  Animated,
  Dimensions,
  I18nManager,
} from "react-native";
import {
  EvilIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";

// styles
import Colors from "../styles/Colors";
import GlobalStyles from "../styles/DetailStyle";

// dimensions
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

const customFonts = {
  light: require("../../assets/fonts/Akshar-Light.ttf"),
  regular: require("../../assets/fonts/Akshar-Regular.ttf"),
  medium: require("../../assets/fonts/Akshar-Medium.ttf"),
  bold: require("../../assets/fonts/Akshar-Bold.ttf"),
};

const DetailScreen = ({ navigation, route }) => {
  const {
    img,
    address,
    title,
    price,
    details_img,
    rate,
    details,
    description,
    type,
  } = route.params;
  const [heart, setHeart] = useState("hearto");
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  const handleLike = () => {
    if (heart == "hearto") {
      setHeart("heart");
    } else {
      setHeart("hearto");
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.contiainer}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />

      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: screenHeight / 2.4,
            borderRadius: 10,
          }}
          source={img}
        />
        <View style={GlobalStyles.back_icon}>
          <Pressable onPress={() => navigation.navigate("List")}>
            <AntDesign
              style={{
                textAlign: "center",
              }}
              name="left"
              size={15}
              color="black"
            />
          </Pressable>
        </View>
        <View style={GlobalStyles.heart_icon}>
          <Pressable onPress={() => handleLike()}>
            <AntDesign
              style={{
                textAlign: "center",
              }}
              name={heart}
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={[GlobalStyles.type, { left: screenWidth / 4 }]}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "regular",
              color: "white",
              fontSize: 15,
            }}
          >
            {type}
          </Text>
        </View>
      </View>

      <View style={GlobalStyles.detail_view}>
        <View style={GlobalStyles.title_rate}>
          <View style={GlobalStyles.title}>
            <Text style={{ fontFamily: "medium", fontSize: 19 }}>{title}</Text>
          </View>
          <View style={GlobalStyles.rate}>
            <Text
              style={{
                fontFamily: "light",
                backgroundColor: "#7850f3",
                color: "white",
                paddingHorizontal: 4,
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              {""} {rate.point} {""}
            </Text>
            <Text style={{ fontFamily: "light" }}>{rate.rate}</Text>
          </View>
        </View>
        <View style={GlobalStyles.address}>
          <Text style={{ fontFamily: "light", fontSize: 15.5, color: "black" }}>
            {address}
          </Text>
        </View>
        <View style={GlobalStyles.details_icons}>
          <View style={GlobalStyles.beds}>
            <FontAwesome5
              style={{ marginRight: 5 }}
              name="bed"
              size={18}
              color="black"
            />
            <Text style={{ fontFamily: "light", fontSize: 14 }}>
              {details.beds}
            </Text>
          </View>
          <View style={GlobalStyles.baths}>
            <FontAwesome
              style={{ marginRight: 5, marginBottom: 8 }}
              name="bath"
              size={20}
              color="black"
            />
            <Text style={{ fontFamily: "light", fontSize: 14 }}>
              {details.baths}
            </Text>
          </View>
          <View style={GlobalStyles.area}>
            <AntDesign
              style={{ marginRight: 5, marginBottom: 5 }}
              name="areachart"
              size={20}
              color="black"
            />
            <Text style={{ fontFamily: "light", fontSize: 14 }}>
              {details.area}
            </Text>
          </View>
        </View>
      </View>

      <View style={GlobalStyles.description}>
        <Text style={{ fontFamily: "regular", fontSize: 17 }}>
          {description}
        </Text>
      </View>

      <View style={[GlobalStyles.img_container]}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={details_img}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => {
            console.log("item img src :", details_img);
            return (
              <Image
                style={[
                  {
                    width: Dimensions.get("screen").width / 3 - 13,
                    height: 90,
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  },
                  index === 1 && { marginHorizontal: 3 },
                ]}
                source={item.src}
              />
              // </View>
            );
          }}
        />
      </View>

      <View style={GlobalStyles.reserve_view}>
        <View style={GlobalStyles.price}>
          <Text style={{ fontFamily: "medium", fontSize: 16 }}>{price}</Text>
          <Text style={{ fontFamily: "light", marginTop: 3 }}>Total Price</Text>
        </View>
        <TouchableOpacity
          onPress={() => Alert.alert("booked")}
          style={GlobalStyles.book_now}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "regular",
              fontSize: 16,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
