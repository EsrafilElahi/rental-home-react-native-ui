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
import { EvilIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import HouseItem from "./../components/HouseItem";

// styles
import Colors from "../styles/Colors";

// details images
const img1 = require("../../assets/images/detailsImg/1.jpg");
const img2 = require("../../assets/images/detailsImg/2.jpg");
const img3 = require("../../assets/images/detailsImg/3.jpg");
const img4 = require("../../assets/images/detailsImg/4.jpg");
const img5 = require("../../assets/images/detailsImg/5.jpg");
const img6 = require("../../assets/images/detailsImg/6.jpg");
const img7 = require("../../assets/images/detailsImg/7.jpg");
const img8 = require("../../assets/images/detailsImg/8.jpg");
const img9 = require("../../assets/images/detailsImg/9.jpg");

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
  const [activeTab, setActiveTab] = useState(0);
  const [isFontLoaded] = useFonts(customFonts);

  const tabs = ["Popular", "Recommended", "Nearest"];

  const houses = [
    {
      id: 1,
      src: require("../../assets/images/4.jpg"),
      title: "Buy Home",
    },
    {
      id: 2,
      src: require("../../assets/images/7.jpg"),
      title: "Rent Home",
    },
  ];

  const details = [
    {
      title: "Los Angeles",
      address: "Central Park, West Side, California",
      price: "$4.500.000",
      img: require("../../assets/images/8.jpg"),
    },
    {
      title: "New York",
      address: "118 Street, West Edmonton, New York",
      price: "$3.000.000",
      img: require("../../assets/images/3.jpg"),
    },
    {
      title: "Washington DC",
      address: "Wall Street, Goerge Street, Washington DC",
      price: "$2.850.000",
      img: require("../../assets/images/6.jpg"),
    },
  ];

  if (!isFontLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        padding: 15,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontFamily: "light", fontSize: 16 }}>Location</Text>
          <Text style={{ fontFamily: "medium", fontSize: 25 }}>USA</Text>
        </View>
        <View>
          <Image
            style={{ width: 55, height: 55, borderRadius: 50 }}
            source={require("../../assets/images/prof.jpg")}
          />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", flex: 5 }}>
          <TextInput
            style={{
              backgroundColor: "#d9d3d357",
              width: "100%",
              padding: 10,
              fontFamily: "light",
              borderRadius: 10,
            }}
            inlineImageLeft="username"
            underlineColorAndroid="transparent"
            placeholder="Search address, city, location"
            value={txt}
            onChangeText={(newTxt) => setTxt(newTxt)}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            paddingVertical: 10,
            borderRadius: 10,
            marginStart: 10,
          }}
        >
          <EvilIcons name="search" size={35} color="white" />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={houses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HouseItem item={item} />}
        />
      </View>

      <View style={{ felx: 1 , flexGrow: .3 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          {tabs?.map((item, index) => (
            <Text
              key={index}
              onPress={() => setActiveTab(index)}
              style={[
                index === activeTab
                  ? {
                      fontFamily: "medium",
                      color: "black",
                      borderBottomWidth: 2,
                      paddingBottom: 5,
                      borderBottomColor: "black",
                    }
                  : {
                      fontFamily: "light",
                      color: "black",
                    },
                index === 1 && { marginHorizontal: 20 },
              ]}
            >
              {item}
            </Text>
          ))}
        </View>

        {/* popular */}
        {activeTab === 0 && (
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}
          >
            <Pressable
              onPress={() =>
                navigation.replace("Detail", {
                  img: require("../../assets/images/8.jpg"),
                  title: "Los Angeles",
                  address: "Central Park, West Side, California",
                  price: "$4.500.000",
                  details_img: [
                    {
                      id: 7,
                      src: img7,
                    },
                    {
                      id: 8,
                      src: img8,
                    },
                    {
                      id: 9,
                      src: img9,
                    },
                  ],
                  rate: {
                    point: 4.8,
                    rate: "155 ratings",
                  },
                  details: {
                    beds: "2 Beds",
                    baths: "2 Baths",
                    area: "100m Area",
                  },
                  description:
                    "this building is located in the oiver area withi walking distance of shops...",
                  type: "Virtual Tour",
                })
              }
            >
              <View>
                <Image
                  style={{ width: "100%", height: 120, borderRadius: 10 }}
                  source={require("../../assets/images/8.jpg")}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 8,
                  paddingBottom: 3,
                }}
              >
                <Text style={{ fontFamily: "medium", fontSize: 16 }}>
                  Los Angeles
                </Text>
                <Text style={{ fontFamily: "regular", color: "red" }}>
                  $4.500.000
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontFamily: "light" }}>
                  Central Park, West Side, California
                </Text>
              </View>
            </Pressable>
          </View>
        )}

        {/* recommended */}
        {activeTab === 1 && (
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}
          >
            <Pressable
              onPress={() =>
                navigation.replace("Detail", {
                  img: require("../../assets/images/3.jpg"),
                  title: "New York",
                  address: "118 Street, West Edmonton, New York",
                  price: "$3.000.000",
                  details_img: [
                    {
                      id: 1,
                      src: img1,
                    },
                    {
                      id: 2,
                      src: img2,
                    },
                    {
                      id: 3,
                      src: img3,
                    },
                  ],
                  rate: {
                    point: 4.2,
                    rate: "180 ratings",
                  },
                  details: {
                    beds: "4 Beds",
                    baths: "3 Baths",
                    area: "230m Area",
                  },
                  description:
                    "this building is located in the oiver area within walking distance of stadium...",
                  type: "For Life",
                })
              }
            >
              <View style={{}}>
                <Image
                  style={{ width: "100%", height: 120, borderRadius: 10 }}
                  source={require("../../assets/images/3.jpg")}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 8,
                  paddingBottom: 3,
                }}
              >
                <Text style={{ fontFamily: "medium", fontSize: 16 }}>
                  New York
                </Text>
                <Text style={{ fontFamily: "regular", color: "red" }}>
                  $3.000.000
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontFamily: "light" }}>
                  118 Street, West Edmonton, New York
                </Text>
              </View>
            </Pressable>
          </View>
        )}

        {/* nearest */}
        {activeTab === 2 && (
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              padding: 10,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}
          >
            <Pressable
              onPress={() =>
                navigation.replace("Detail", {
                  img: require("../../assets/images/6.jpg"),
                  title: "Washington DC",
                  address: "Wall Street, Goerge Street, Washington DC",
                  price: "$2.850.000",
                  details_img: [
                    {
                      id: 3,
                      src: img4,
                    },
                    {
                      id: 4,
                      src: img5,
                    },
                    {
                      id: 5,
                      src: img6,
                    },
                  ],
                  rate: {
                    point: 5,
                    rate: "250 ratings",
                  },
                  details: {
                    beds: "3 Beds",
                    baths: "1 Baths",
                    area: "110m Area",
                  },
                  description:
                    "this building is located in the oiver area withi walking distance of school and college...",
                  type: "Villa Building",
                })
              }
            >
              <View style={{}}>
                <Image
                  style={{ width: "100%", height: 120, borderRadius: 10 }}
                  source={require("../../assets/images/6.jpg")}
                />
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 8,
                  paddingBottom: 3,
                }}
              >
                <Text style={{ fontFamily: "medium", fontSize: 16 }}>
                  Washington DC
                </Text>
                <Text style={{ fontFamily: "regular", color: "red" }}>
                  $2.850.000
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontFamily: "light" }}>
                  Wall Street, Goerge Street, Washington DC
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
