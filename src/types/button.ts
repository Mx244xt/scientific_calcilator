import { GestureResponderEvent } from "react-native";

export interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  mainText: string;
  topText?: string | undefined;
  bottomText?: string | undefined;
  topRightText?:string | undefined;
  topLeftText?:string | undefined;
  fontSize?: number | undefined;
  bgColor?: string | undefined;
  fontColor?: string | undefined;
}