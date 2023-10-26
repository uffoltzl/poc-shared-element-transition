import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { DATA } from "../shared/data";
import { Element } from "../components/Element";
import { useNavigation } from "@react-navigation/native";
import { NavigatorStackNavigationProp } from "./RouteParams";

export const GridPage = () => {
  const { navigate } =
    useNavigation<NavigatorStackNavigationProp<"GridPage">>();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={({ item, index }) => (
          <>
            <Element
              id={item.id}
              color={item.color}
              onPress={() => navigate("ItemPage", item)}
            />
            {index !== DATA.length - 1 ? <View style={{ width: 8 }} /> : null}
          </>
        )}
        ListHeaderComponent={() => <View style={{ height: 40 }} />}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
