import { GestureResponderEvent } from "react-native";

export type ButtonProps = {
  isAlt?: boolean;
  setState?: (display: string, calc: string) => void;
  buttonText: {
    mainText: string;
    topText?: string | undefined;
    bottomText?: string | undefined;
    topRightText?: string | undefined;
    topLeftText?: string | undefined;
  }
  displayText: {
    mainText?: string;
    topText?: string | undefined;
    bottomText?: string | undefined;
    topRightText?: string | undefined;
    topLeftText?: string | undefined;
  }
  calcText: {
    mainText?: string;
    topText?: string | undefined;
    bottomText?: string | undefined;
    topRightText?: string | undefined;
    topLeftText?: string | undefined;
  }
  fontSize?: number | undefined;
  bgColor?: string[] | undefined;
  fontColor?: string | undefined;
}