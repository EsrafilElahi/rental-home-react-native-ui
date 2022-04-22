import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const HouseItem = ({ item }) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginBottom: 18,
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
      }}
    >
      <Image
        style={{
          width: Dimensions.get("screen").width / 2.5,
          height: 140,
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
