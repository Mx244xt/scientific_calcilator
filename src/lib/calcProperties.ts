const calcProperties = () => {
  const subButtonObj = [
    [
      {
        buttonText: {
          mainText: "ALT",
        },
        displayText: {
          mainText: "ALT",
          topLeftText: "ALT",
        },
        calcText: {
          mainText: "ALT",
          topLeftText: "ALT",
        },
        bgColor: ["#fffa00", "#c6c200", "#9d9a00"],
      },
      {
        buttonText: {
          mainText: "SHIFT",
          topLeftText: "FSE",
        },
        displayText: {
          mainText: "SHIFT",
          topLeftText: "FSE",
        },
        calcText: {
        },
        bgColor: ["#00ff17", "#00c817", "#008017"],
        fontColor: "white",
      },
      {
        buttonText: {
          mainText: "☒DEL",
          topLeftText: "DLGS",
        },
        displayText: {
          mainText: "DEL",
          topLeftText: "DLGS",
        },
        calcText: {
          mainText: "DEL",
        },
      },
      {
        buttonText: {
          mainText: "⌫BS",
          topLeftText: "DRG",
        },
        displayText: {
          mainText: "⌫BS",
          topLeftText: "DRG",
        },
        calcText: {
          mainText: "BS",
        },
      },
      {
        buttonText: {
          mainText: "CLR",
          topRightText: "≡",
          topLeftText: "MENU",
        },
        displayText: {
          mainText: "CLR",
          topRightText: "≡",
          topLeftText: "MENU",
        },
        calcText: {
          mainText: "CLR",
        },
        bgColor: ["#ff0000", "#d50000", "#9c0000"],
        fontColor: "white",
      },
    ],
    [
      {
        buttonText: {
          mainText: "△",
          topRightText: "History",
          topLeftText: "DEC",
        },
        displayText: {
          mainText: "↑↑",
          topRightText: "History",
          topLeftText: "DEC",
        },
        calcText: {
        },
      },
      {
        buttonText: {
          mainText: "▲",
          topLeftText: "HEX",
        },
        displayText: {
          mainText: "↑",
          topLeftText: "HEX",
        },
        calcText: {
        },
      },
      {
        buttonText: {
          mainText: "▼",
          topLeftText: "OCT",
        },
        displayText: {
          mainText: "↓",
          topLeftText: "OCT",
        },
        calcText: {
        },
      },
      {
        buttonText: {
          mainText: "◀︎",
          topRightText: "◀︎ENG",
          topLeftText: "BIN",
        },
        displayText: {
          mainText: "←",
          topRightText: "←ENG",
          topLeftText: "BIN",
        },
        calcText: {
        },
      },
      {
        buttonText: {
          mainText: "▶︎",
          topRightText: "ENG▶︎",
          topLeftText: "ads",
        },
        displayText: {
          mainText: "→",
          topRightText: "ENG→",
          topLeftText: "ads",
        },
        calcText: {
        },
      },
    ],
    [
      {
        buttonText: {
          mainText: "sin",
          topLeftText: "sinˉ ¹"
        },
        displayText: {
          mainText: "sin(",
          topLeftText: "acos("
        },
        calcText: {
          mainText: "sin(",
          topLeftText: "asin("
        },
      },
      {
        buttonText: {
          mainText: "cos",
          topLeftText: "cosˉ ¹"
        },
        displayText: {
          mainText: "cos(",
          topLeftText: "acos("
        },
        calcText: {
          mainText: "cos(",
          topLeftText: "acos("
        },
      },
      {
        buttonText: {
          mainText: "tan",
          topLeftText: "tanˉ ¹"
        },
        displayText: {
          mainText: "tan(",
          topLeftText: "atan("
        },
        calcText: {
          mainText: "tan(",
          topLeftText: "atan("
        },
      },
      {
        buttonText: {
          mainText: "log",
          topLeftText: "10ˣ"
        },
        displayText: {
          mainText: "log(",
          topLeftText: "10^("
        },
        calcText: {
          mainText: "log(",
          topLeftText: "10**("
        },
      },
      {
        buttonText: {
          mainText: "In",
          topLeftText: "eˣ"
        },
        displayText: {
          mainText: "In(",
          topLeftText: "e^("
        },
        calcText: {
          mainText: "in(",
          topLeftText: "e("
        },
      }
    ],
    [
      {
        buttonText: {
          mainText: "X²",
          topLeftText: "Xˉ ¹"
        },
        displayText: {
          mainText: "^2",
          topLeftText: "^(-1)"
        },
        calcText: {
          mainText: "** 2",
          topLeftText: "** _1"
        },
      },
      {
        buttonText: {
          mainText: "Xʸ",
          topLeftText: "ˣ √"
        },
        displayText: {
          mainText: "^(",
          topLeftText: "×√("
        },
        calcText: {
          mainText: "**(",
          topLeftText: "*√("
        },
      },
      {
        buttonText: {
          mainText: "√(",
          topLeftText: "³ √("
        },
        displayText: {
          mainText: "√(",
          topLeftText: "3×√("
        },
        calcText: {
          mainText: "√(",
          topLeftText: "3*√("
        },
      },
      {
        buttonText: {
          mainText: "π",
          topLeftText: "n!"
        },
        displayText: {
          mainText: "π",
          topLeftText: "!"
        },
        calcText: {
          mainText: "π",
          topLeftText: "!"
        },
      },
      {
        buttonText: {
          mainText: `º ' "`,
          topLeftText: "H:M:S ⇆"
        },
        displayText: {
          mainText: `º ' "`,
          topLeftText: "H:M:S ⇆"
        },
        calcText: {
          //TODO mainText: `dns`,
          //TODO topLeftText: "time"
        },
      }
    ]
  ];

  const mainButtonObj = [
    [
      {
        buttonText: {
          mainText: "7",
          topText: "Const",
        },
        displayText: {
          mainText: "7",
          topText: "Const",
        },
        calcText: {
          mainText: "7",
          //TODO topText: "Const",
        },
      },
      {
        buttonText: {
          mainText: "8",
        },
        displayText: {
          mainText: "8",
        },
        calcText: {
          mainText: "8",
        },
      },
      {
        buttonText: {
          mainText: "9",
          topText: "Mod",
        },
        displayText: {
          mainText: "9",
          topText: "Mod",
        },
        calcText: {
          mainText: "9",
          topText: "%",
        },
      },
      {
        buttonText: {
          mainText: "(",
          topText: "Pol",
        },
        displayText: {
          mainText: "(",
          topText: "Pol",
        },
        calcText: {
          mainText: "(",
          //TODO topText: "Pol",
        },
      },
      {
        buttonText: {
          topText: "Rec",
          mainText: ")",
          bottomText: "",
        },
        displayText: {
          topText: "Rec",
          mainText: ")",
          bottomText: "",
        },
        calcText: {
          //TODO topText: "Rec",
          mainText: ")",
        },
      },
    ],
    [
      {
        buttonText: {
          mainText: "4",
          bottomText: "D",
        },
        displayText: {
          mainText: "4",
          bottomText: "D",
        },
        calcText: {
          mainText: "4",
          //TODO bottomText: "D",
        },
      },
      {
        buttonText: {
          mainText: "5",
          bottomText: "E",
        },
        displayText: {
          mainText: "5",
          bottomText: "E",
        },
        calcText: {
          mainText: "5",
          //TODO bottomText: "E",
        },
      },
      {
        buttonText: {
          mainText: "6",
          bottomText: "F",
        },
        displayText: {
          mainText: "6",
          bottomText: "F",
        },
        calcText: {
          mainText: "6",
          //TODO bottomText: "F",
        },
      },
      {
        buttonText: {
          mainText: "×",
          topText: "nPr",
        },
        displayText: {
          mainText: "×",
          topText: "nPr",
        },
        calcText: {
          mainText: "*",
          //TODO TODO topText: "nPr",
        },
      },
      {
        buttonText: {
          mainText: "÷",
          topText: "nCr",
        },
        displayText: {
          mainText: "÷",
          topText: "nCr",
        },
        calcText: {
          mainText: "/",
          //TODO topText: "nCr",
        },
      },
    ],
    [
      {
        buttonText: {
          mainText: "1",
          bottomText: "A",
        },
        displayText: {
          mainText: "1",
          bottomText: "A",
        },
        calcText: {
          mainText: "1",
          //TODO bottomText: "A",
        },
      },
      {
        buttonText: {
          mainText: "2",
          bottomText: "B",
        },
        displayText: {
          mainText: "2",
          bottomText: "B",
        },
        calcText: {
          mainText: "2",
          //TODO bottomText: "B",
        },
      },
      {
        buttonText: {
          mainText: "3",
          bottomText: "C",
        },
        displayText: {
          mainText: "3",
          bottomText: "C",
        },
        calcText: {
          mainText: "3",
          //TODO bottomText: "C",
        },
      },
      {
        buttonText: {
          mainText: "+",
          topText: "%",
          bottomText: "M+",
        },
        displayText: {
          mainText: "+",
          topText: "%",
          bottomText: "M+",
        },
        calcText: {
          mainText: "+",
          //TODO topText: "%",
          //TODO bottomText: "M+",
        },
      },
      {
        buttonText: {
          mainText: "-",
          topText: "(-)",
          bottomText: "M-",
        },
        displayText: {
          mainText: "-",
          topText: "(-)",
          bottomText: "M-",
        },
        calcText: {
          mainText: "-",
          //TODO topText: "(-)",
          //TODO bottomText: "M-",
        },
      },
    ],
    [
      {
        buttonText: {
          mainText: "0",
          bottomText: "MC",
        },
        displayText: {
          mainText: "0",
          bottomText: "MC",
        },
        calcText: {
          mainText: "0",
          //TODO bottomText: "MC",
        },
      },
      {
        buttonText: {
          mainText: ".",
          bottomText: "M",
        },
        displayText: {
          mainText: ".",
          bottomText: "M",
        },
        calcText: {
          mainText: ".",
          //TODO bottomText: "M",
        },
      },
      {
        buttonText: {
          mainText: "Exp",
          bottomText: "MR",
        },
        displayText: {
          mainText: "Exp",
          bottomText: "MR",
        },
        calcText: {
          //TODO mainText: "Exp",
          //TODO bottomText: "MR",
        },
        fontSize: 26,
      },
      {
        buttonText: {
          topText: "Ans",
          mainText: "Ans",
          bottomText: "History",
        },
        displayText: {
          topText: "Ans",
          mainText: "Ans",
          bottomText: "History",
        },
        calcText: {
          //TODO topText: "Ans",
          //TODO mainText: "Ans",
          //TODO bottomText: "History",
        },
        fontSize: 26,
      },
      {
        buttonText: {
          mainText: "=",
        },
        displayText: {
          mainText: "=",
        },
        calcText: {
          mainText: "=",
        },
      },
    ],
  ];
  return { mainButtonObj, subButtonObj }
}

export default calcProperties;