import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Disply from '../components/Disply';
import MainButton from '../components/MainButton';
import SubButton from '../components/SubButton';
import { ButtonProps } from '../types/button';
import Header from '../components/Header';
import calcProperties from '../lib/calcProperties';
import reversePolishNotaion from '../lib/reversePolishNotaion';
import rpnCalculation from '../lib/rpnCalculation';

const HomeScreen = () => {
  const [text, setText] = useState<string[]>([""]);
  const { mainButtonObj, subButtonObj } = calcProperties();
  const setState = (event: string) => {
    if (event === "CLR") {
      text.pop();
      setText([""])
    } else if (event === "=") {
      try {

        const rpn = reversePolishNotaion(text[0])
        if (rpn != null) {
          const result = rpnCalculation(rpn);
          setText([result]);
        }
      } catch (error) {
        console.error("なんらかのエラー")
      }

    } else {
      setText([text + event]);
    }
  };
  (text);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.disply}>
        <Disply text={text} />
      </View>
      <View style={styles.subButton}>
        {subButtonObj.map((items, i) => (
          <View key={i} style={styles.row}>
            {items.map((item: ButtonProps, j) => (
              <SubButton
                key={`${i}-${j}`}
                mainText={item.mainText}
                onPress={item.onPress}
                setState={setState}
                topRightText={item.topRightText}
                topLeftText={item.topLeftText}
                bgColor={item.bgColor}
                fontColor={item.fontColor}
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.mainButton}>
        {mainButtonObj.map((items, i) => (
          <View key={i} style={styles.row}>
            {items.map((item: ButtonProps, j) => (
              <MainButton
                key={`${i}-${j}`}
                onPress={item.onPress}
                setState={setState}
                mainText={item.mainText}
                topText={item.topText}
                bottomText={item.bottomText}
                fontSize={item.fontSize}
              />
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 5,
    fontFamily: "Hiragino Mincho ProN",
  },
  row: {
    flexDirection: "row"
  },
  disply: {
    flex: 1,
  },
  subButton: {
    justifyContent: "flex-end"
  },
  mainButton: {
    justifyContent: "flex-end"
  },

});