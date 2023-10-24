import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type NavigatorStackParamList = {
  GridPage: undefined;
  ItemPage: { id: string; color: string };
};

type NavigatorStackScreenProps<Screen extends keyof NavigatorStackParamList> =
  NativeStackScreenProps<NavigatorStackParamList, Screen>;

export type NavigatorStackNavigationProp<
  Screen extends keyof NavigatorStackParamList
> = NavigatorStackScreenProps<Screen>["navigation"];

export type NavigatorStackRouteProp<
  Screen extends keyof NavigatorStackParamList
> = NavigatorStackScreenProps<Screen>["route"];
