import { I18nManager } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createNativeStackNavigator();
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

const customFonts = {
  light: require("./assets/fonts/Akshar-Light.ttf"),
  regular: require("./assets/fonts/Akshar-Regular.ttf"),
  medium: require("./assets/fonts/Akshar-Medium.ttf"),
};

export default function App() {
  const [isFontLoaded] = useFonts(customFonts);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
