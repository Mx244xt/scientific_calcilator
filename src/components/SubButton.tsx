import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from '../types/button';

const SubButton = ({ setState, isAlt, buttonText, displayText, calcText, bgColor, fontColor }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textTopContainer}>
        {displayText.topLeftText && <Text style={[styles.textLeftTop, !calcText.topLeftText && { opacity: 0.3 }]} >{displayText.topLeftText}</Text>}
        {displayText.topRightText && <Text style={[styles.textRightTop, !calcText.topRightText && { opacity: 0.3 }]} >{displayText.topRightText}</Text>}
      </View>
      <TouchableHighlight
        style={styles.TouchableHighlight}
        activeOpacity={0.1}
        underlayColor="#FFA800"
        onPress={() => isAlt
          ? setState &&
          calcText.mainText &&
          displayText.mainText &&
          setState(displayText.mainText, calcText.mainText)
          : setState &&
          calcText.topLeftText &&
          displayText.topLeftText &&
          setState(displayText.topLeftText, calcText.topLeftText)
        }
      >
        <LinearGradient
          colors={displayText.mainText !== "ALT" ? bgColor ? [bgColor[0], bgColor[1], bgColor[2]] : ['#E4E6F3', '#80828D', '#5E5F61'] : isAlt && bgColor ? [bgColor[0], bgColor[1], bgColor[2]] : ["#ff6801", "#cb5300", "#9d4000"]}
          style={styles.linearGradient}>
          <Text style={[styles.mainText, !!fontColor && { color: fontColor }, !calcText.mainText && { opacity: 0.3 }]}>{buttonText.mainText}</Text>
        </LinearGradient>
      </TouchableHighlight>
    </View>
  )
}

export default SubButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  TouchableHighlight: {
    borderRadius: 5
  },
  linearGradient: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    margin: 1,
    borderRadius: 2
  },
  mainText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Arial",
  },
  textTopContainer: {
    flexDirection: "row",
    marginTop: 2,
  },
  textLeftTop: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "orange",
    fontSize: 14,
    fontFamily: "Arial",
  },
  textRightTop: {
    color: "green",
    fontSize: 14,
    fontFamily: "Arial",
  },
});