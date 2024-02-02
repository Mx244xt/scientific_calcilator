import { useState } from "react";

const calcProperties = () => {
  const [texts, setTexts] = useState<string[]>([""]);

  const onPress = (text: string) => {
    if (text === "CLR") {
      texts.pop()
      setTexts([""])
    } else {
      setTexts([text])
    }
  };

  const subButtonObj = [
    [
      {
        // mainText: "ALT",
        onPress: () => onPress("ALT"),
        bgColor: "yellow",
      },
      {
        // mainText: "SHIFT",
        onPress: () => onPress("SHIFT"),
        topLeftText: "FSE",
        bgColor: "green",
        fontColor: "white",
      },
      {
        // mainText: "☒DEL",
        onPress: () => onPress("DEL"),
        topLeftText: "DLGS",
      },
      {
        // mainText: "⌫BS",
        onPress: () => onPress("BS"),
        topLeftText: "DRG",
      },
      {
        mainText: "CLR",
        onPress: () => onPress("CLR"),
        topRightText: "≡",
        topLeftText: "MENU",
        bgColor: "red",
        fontColor: "white",
      },
    ],
    [
      {
        // mainText: "△",
        onPress: () => onPress("△"),
        topRightText: "History",
        topLeftText: "DEC",
      },
      {
        // mainText: "▲",
        onPress: () => onPress("▲"),
        topLeftText: "HEX",
      },
      {
        // mainText: "▼",
        onPress: () => onPress("▼"),
        topLeftText: "OCT",
      },
      {
        // mainText: "◀︎",
        onPress: () => onPress("◀︎"),
        topRightText: "◀︎ENG",
        topLeftText: "BIN",
      },
      {
        // mainText: "▶︎",
        onPress: () => onPress("▶︎"),
        topRightText: "ENG▶︎",
        topLeftText: "ads",
      },
    ],
    [
      {
        mainText: "sin",
        onPress: () => onPress("sin"),
        topLeftText: "sinˉ ¹"
      },
      {
        mainText: "cos",
        onPress: () => onPress("cos"),
        topLeftText: "cosˉ ¹"
      },
      {
        mainText: "tan",
        onPress: () => onPress("tan"),
        topLeftText: "tanˉ ¹"
      },
      {
        // mainText: "log",
        onPress: () => onPress("log"),
        topLeftText: "10ˣ"
      },
      {
        // mainText: "In",
        onPress: () => onPress("in"),
        topLeftText: "eˣ"
      }
    ],
    [
      {
        // mainText: "X²",
        onPress: () => onPress("^2"),
        topLeftText: "Xˉ ¹"
      },
      {
        // mainText: "Xʸ",
        onPress: () => onPress("^"),
        topLeftText: "ˣ √"
      },
      {
        // mainText: "√",
        onPress: () => onPress("√"),
        topLeftText: "³ √"
      },
      {
        // mainText: "π",
        onPress: () => onPress("π"),
        topLeftText: "n!"
      },
      {
        // mainText: `º ' "`,
        onPress: () => onPress("time"),
        topLeftText: "H:M:S ⇆"
      }
    ]
  ];

  const mainButtonObj = [
    [
      {
        mainText: "7",
        onPress: () => onPress("7"),
        topText: "Const",
      },
      {
        mainText: "8",
        onPress: () => onPress("8"),
      },
      {
        mainText: "9",
        onPress: () => onPress("9"),
        topText: "Mod",
      },
      {
        mainText: "(",
        onPress: () => onPress("("),
        topText: "Pol",
      },
      {
        mainText: ")",
        onPress: () => onPress(")"),
        topText: "Rec",
        bottomText: "",
      },
    ],
    [
      {
        mainText: "4",
        onPress: () => onPress("4"),
        bottomText: "D",
      },
      {
        mainText: "5",
        onPress: () => onPress("5"),
        bottomText: "E",
      },
      {
        mainText: "6",
        onPress: () => onPress("6"),
        bottomText: "F",
      },
      {
        mainText: "*",
        onPress: () => onPress("×"),
        topText: "nPr",
      },
      {
        mainText: "/",
        onPress: () => onPress("÷"),
        topText: "nCr",
      },
    ],
    [
      {
        mainText: "1",
        onPress: () => onPress("1"),
        bottomText: "A",
      },
      {
        mainText: "2",
        onPress: () => onPress("2"),
        bottomText: "B",
      },
      {
        mainText: "3",
        onPress: () => onPress("3"),
        bottomText: "C",
      },
      {
        mainText: "+",
        onPress: () => onPress("+"),
        topText: "%",
        bottomText: "M+",
      },
      {
        mainText: "-",
        onPress: () => onPress("-"),
        topText: "(-)",
        bottomText: "M-",
      },
    ],
    [
      {
        mainText: "0",
        onPress: () => onPress("0"),
        bottomText: "MC",
      },
      {
        mainText: ".",
        onPress: () => onPress("."),
        bottomText: "M",
      },
      {
        // mainText: "Exp",
        onPress: () => onPress("Exp"),
        bottomText: "MR",
        fontSize: 26,
      },
      {
        // mainText: "Ans",
        onPress: () => onPress("Ans"),
        topText: "Ans",
        bottomText: "History",
        fontSize: 26,
      },
      {
        mainText: "=",
        onPress: () => onPress("="),
      },
    ],
  ];
  return { mainButtonObj, subButtonObj }
}

export default calcProperties;