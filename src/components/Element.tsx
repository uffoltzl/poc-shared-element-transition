import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";

interface Props {
  id: string;
  color: string;
  onPress: () => void;
}

export const Element: FunctionComponent<Props> = ({ id, color, onPress }) => {
  return (
    <Animated.View sharedTransitionTag={id}>
      <Pressable
        onPress={onPress}
        style={{ height: 100, width: 100, backgroundColor: color }}
      />
    </Animated.View>
  );
};
