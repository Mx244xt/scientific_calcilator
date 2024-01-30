import { GestureResponderEvent } from "react-native";

export interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  mainText: string;
  topText?: string | undefined;
  bottomText?: string | undefined;
}