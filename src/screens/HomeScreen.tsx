import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Disply from '../components/Disply';
import MainButton from '../components/MainButton';
import SubButton from '../components/SubButton';
import { ButtonProps } from '../types/button';
import Header from '../components/Header';

const HomeScreen = () => {
  const [text, setText] = useState<string[]>([
    "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9",
    "= 45",
    "√(2)",
    "= 1.414213562373",
    "6.35 × cos(7)",
    "= 6,302668062922",
    "10P3",
    "=720",
    "2log(10)",
    "= 2",
    "5 Mod 3",
    "Q = 1",
    "R = 2",

  ]);
  const onPress = () => { };

  const subButtonObj = [
    [
      {
        mainText: "ALT",
        onPress: onPress,
      },
      {
        mainText: "SHIFT",
        onPress: onPress,
        topText: "FSE",
      },
      {
        mainText: "☒DEL",
        onPress: onPress,
        topText: "DLGS",
      },
      {
        mainText: "⌫BS",
        onPress: onPress,
        topText: "DRG",
      },
      {
        mainText: "CLR",
        onPress: onPress,
        topText: "MENU≡",
      },
    ],
    [
      {
        mainText: "△",
        onPress: onPress,
        topText: "DEC",

      },
      {
        mainText: "▲",
        onPress: onPress,
        topText: "HEX",
      },
      {
        mainText: "▼",
        onPress: onPress,
        topText: "OCT",
      },
      {
        mainText: "◀︎",
        onPress: onPress,
        topText: "BIN ◀︎ENG",
      },
      {
        mainText: "▶︎",
        onPress: onPress,
        topText: "ads ENG▶︎",
      },
    ],
    [
      {
        mainText: "sin",
        onPress: onPress,
        topText: "sinˉ ¹"
      },
      {
        mainText: "cos",
        onPress: onPress,
        topText: "cosˉ ¹"
      },
      {
        mainText: "tan",
        onPress: onPress,
        topText: "tanˉ ¹"
      },
      {
        mainText: "log",
        onPress: onPress,
        topText: "10ˣ"
      },
      {
        mainText: "In",
        onPress: onPress,
        topText: "eˣ"
      }
    ],
    [
      {
        mainText: "X²",
        onPress: onPress,
        topText: "Xˉ ¹"
      },
      {
        mainText: "Xʸ",
        onPress: onPress,
        topText: "ˣ √"
      },
      {
        mainText: "√",
        onPress: onPress,
        topText: "³ √"
      },
      {
        mainText: "π",
        onPress: onPress,
        topText: "n!"
      },
      {
        mainText: `º ' "`,
        onPress: onPress,
        topText: "H:M:S ⇆"
      }
    ]
  ];

  const mainButtonObj = [
    [
      {
        mainText: "7",
        onPress: onPress,
        topText: "Const",
      },
      {
        mainText: "8",
        onPress: onPress,
      },
      {
        mainText: "9",
        onPress: onPress,
        topText: "Mod",
      },
      {
        mainText: "(",
        onPress: onPress,
        topText: "Pol",
      },
      {
        mainText: ")",
        onPress: onPress,
        topText: "Rec",
        bottomText: "",
      },
    ],
    [
      {
        mainText: "4",
        onPress: onPress,
        bottomText: "D",
      },
      {
        mainText: "5",
        onPress: onPress,
        bottomText: "E",
      },
      {
        mainText: "6",
        onPress: onPress,
        bottomText: "F",
      },
      {
        mainText: "×",
        onPress: onPress,
        topText: "nPr",
      },
      {
        mainText: "÷",
        onPress: onPress,
        topText: "nCr",
      },
    ],
    [
      {
        mainText: "1",
        onPress: onPress,
        bottomText: "A",
      },
      {
        mainText: "2",
        onPress: onPress,
        bottomText: "B",
      },
      {
        mainText: "3",
        onPress: onPress,
        bottomText: "C",
      },
      {
        mainText: "+",
        onPress: onPress,
        topText: "%",
        bottomText: "M+",
      },
      {
        mainText: "-",
        onPress: onPress,
        topText: "(-)",
        bottomText: "M-",
      },
    ],
    [
      {
        mainText: "0",
        onPress: onPress,
        bottomText: "MC",
      },
      {
        mainText: ".",
        onPress: onPress,
        bottomText: "M",
      },
      {
        mainText: "Exp",
        onPress: onPress,
        bottomText: "MR",
      },
      {
        mainText: "Ans",
        onPress: onPress,
        topText: "Ans",
        bottomText: "History",
      },
      {
        mainText: "=",
        onPress: onPress,
      },
    ],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.disply}>
        <Disply text={text} />
      </View>
      <View style={styles.subButton}>
        <FlatList
          data={subButtonObj}
          renderItem={({ item }: { item: ButtonProps[] }) => (
            <FlatList
              data={item}
              numColumns={5}
              renderItem={({ item }: { item: ButtonProps }) => <SubButton onPress={onPress} mainText={item.mainText} topText={item.topText} />}
              keyExtractor={item => item.mainText}
            />
          )}
        >
        </FlatList>
      </View>
      <View style={styles.mainButton}>
        <FlatList
          data={mainButtonObj}
          renderItem={({ item }: { item: ButtonProps[] }) => (
            <FlatList
              data={item}
              numColumns={5}
              renderItem={({ item }: { item: ButtonProps }) => <MainButton onPress={onPress} mainText={item.mainText} topText={item.topText} bottomText={item.bottomText}
              />}
              keyExtractor={item => item.mainText}
            />
          )}
        >
        </FlatList>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontFamily: "Hiragino Mincho ProN",
  },
  disply: {
    flex: 1,
  },
  mainButton: {
  },
  subButton: {
  },

});