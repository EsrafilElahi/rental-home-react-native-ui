import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const HouseItem = ({ item }) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <View
      style={{
        marginHorizontal: 10,
        marginBottom: 17,
        display: "flex",
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        flex: 1,
        flexGrow: 1,
      }}
    >
      <Image
        style={{
          width: Dimensions.get("screen").width / 2.5,
          height: height / 5,
          borderRadius: 10,
        }}
        source={item.src}
      />
      <Text
        style={{
          textAlign: "center",
          paddingBottom: 25,
          paddingTop: 10,
          color: "black",
          fontFamily: "regular",
        }}
      >
        {item.title}
      </Text>
    </View>
  );
};

export default HouseItem;
