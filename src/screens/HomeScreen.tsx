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
  const [displaytexts, setDisplaytexts] = useState<string[]>([""]);
  const [calcTexts, setCalcTexts] = useState<string[]>([""]);
  const [isAlt, setIsAlt] = useState<boolean>(true);
  const { mainButtonObj, subButtonObj } = calcProperties();
  const setState = (display: string, calc: string) => {
    setIsAlt(true);
    switch (calc) {
      case "CLR":
        displaytexts.pop();
        calcTexts.pop();
        setDisplaytexts([""])
        setCalcTexts([""])
        setIsAlt(true);
        break;
      case "ALT":
        if (isAlt == true) setIsAlt(!isAlt);
        break;
      case "BS":
                setDisplaytexts([...displaytexts.slice(0, -1), displaytexts.slice(-1)[0].slice(0, -1)]);
        setCalcTexts([...calcTexts.slice(0, -1), calcTexts.slice(-1)[0].slice(0, -1)]);
        break;
      case "DEL":
        setDisplaytexts(displaytexts.filter((e, index) => (index !== displaytexts.length - 1)));
        setCalcTexts(calcTexts.filter((e, index) => (index !== calcTexts.length - 1)));
        break;
      case "=":
        try {
          if (calcTexts != null) {
            const rpn = reversePolishNotaion(calcTexts.slice(-1)[0])
                        if (typeof (rpn) === "string") {
              const result = rpnCalculation(rpn);
                            if (typeof (result) === "number") {
                setDisplaytexts([...displaytexts, "=" + result.toString(), ""]);
                setCalcTexts([...calcTexts, "=" + result.toString(), ""]);
                return;
              }
            }
          } throw new Error
        } catch (error) {
          console.error(error);
          setDisplaytexts([...displaytexts, "=Calcilation error", ""]);
        }
        break;
      default:
        setDisplaytexts([...displaytexts.slice(0, -1), displaytexts.slice(-1)[0] + display]);
        setCalcTexts([...calcTexts.slice(0, -1), calcTexts.slice(-1)[0] + calc]);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.disply}>
        <Disply displayText={displaytexts} />
      </View>
      <View style={styles.subButton}>
        {subButtonObj.map((items, i) => (
          <View key={i} style={styles.row}>
            {items.map((item: ButtonProps, j) => (
              <SubButton
                key={`${i}-${j}`}
                isAlt={isAlt}
                setState={setState}
                buttonText={item.buttonText}
                displayText={item.displayText}
                calcText={item.calcText}
                fontColor={item.fontColor}
                bgColor={item.bgColor}
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
                isAlt={isAlt}
                setState={setState}
                buttonText={item.buttonText}
                displayText={item.displayText}
                calcText={item.calcText}
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