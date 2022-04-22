import { SafeAreaView, StatusBar, View, Text, Image } from "react-native";
import React from "react";

const DetailScreen = ({ navigation, route }) => {
  const { img, address, title, price } = route.params;

  console.log("img :", img);
  console.log("address :", address);
  console.log("title :", title);
  console.log("price :", price);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View>
        <Text>Detail Screen</Text>
        <Image source={img} style={{ width: 200, height: 200 }} />
        <Text>{address}</Text>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
