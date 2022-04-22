import { SafeAreaView, StatusBar, View, Text } from "react-native";
import React from "react";

const DetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="red" />
      <View>
        <Text>Detail Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
