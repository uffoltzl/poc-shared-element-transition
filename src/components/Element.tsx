import { FunctionComponent } from "react";
import { Pressable, View } from "react-native";

interface Props {
  id: string;
  color: string;
  onPress: () => void;
}

export const Element: FunctionComponent<Props> = ({ id, color, onPress }) => {
  return (
    <View style={{ height: 100, width: 100, backgroundColor: color }}>
      <Pressable onPress={onPress} />
    </View>
  );
};
