import { View, Text, Image } from "react-native";
import React from "react";

const Card = ({ item, activeTab, index }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        width: 330,
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
      <View>
        <Image
          style={{ width: "100%", height: 120, borderRadius: 10 }}
          source={item.img}
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
        <Text style={{ fontFamily: "medium", fontSize: 16 }}>{item.title}</Text>
        <Text style={{ fontFamily: "regular", color: "red" }}>
          {item.price}
        </Text>
      </View>
      <View style={{}}>
        <Text style={{ fontFamily: "light" }}>{item.address}</Text>
      </View>
    </View>
  );
};

export default Card;
