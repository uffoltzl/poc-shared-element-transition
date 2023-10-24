import { NavigationContainer } from "@react-navigation/native";
import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GridPage } from "./src/pages/GridPage";
import ItemPage from "./src/pages/ItemPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorStackParamList } from "./src/pages/RouteParams";

const Stack = createNativeStackNavigator<NavigatorStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GridPage">
        <Stack.Screen
          name="GridPage"
          component={GridPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemPage"
          component={ItemPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
