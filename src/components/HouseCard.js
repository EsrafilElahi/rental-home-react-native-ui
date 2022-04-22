import React from "react";
import { View, Text, Image } from "react-native";
import GlobalStyles from "../styles/HomeStyles";

const HouseCard = ({ item }) => {
  return (
    <View style={GlobalStyles.house_card}>
      <Image source={item.src} />
      <Text>{item.text}</Text>
    </View>
  );
};

export default HouseCard;
