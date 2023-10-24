import { useRoute } from "@react-navigation/native";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { NavigatorStackRouteProp } from "./RouteParams";

const ItemPage = () => {
  const {
    params: { id, color },
  } = useRoute<NavigatorStackRouteProp<"ItemPage">>();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: color, height: 150, width: "100%" }}
      ></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default ItemPage;
