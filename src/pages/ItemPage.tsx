import { useRoute } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigatorStackRouteProp } from "./RouteParams";
import Animated from "react-native-reanimated";

const ItemPage = () => {
  const {
    params: { id, color },
  } = useRoute<NavigatorStackRouteProp<"ItemPage">>();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{ backgroundColor: color, height: 200, width: "100%" }}
        sharedTransitionTag={id}
      ></Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default ItemPage;
