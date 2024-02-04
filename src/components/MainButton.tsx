import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ButtonProps } from '../types/button';

const MainButton = ({ setState, isAlt, buttonText, displayText, calcText, fontSize }: ButtonProps) => {
  return (
    <TouchableHighlight
      style={[styles.container, { borderRadius: 5 }]}
      activeOpacity={0.5}
      underlayColor="#FFA800"
      onPress={() => isAlt
        ? setState &&
        calcText.mainText &&
        displayText.mainText &&
        setState(displayText.mainText, calcText.mainText)
        : setState &&
        calcText.topText &&
        displayText.topText &&
        setState(displayText.topText, calcText.topText)
      }>
      <LinearGradient
        colors={['#6F6F6F', '#393939', '#232323']}
        style={styles.linearGradient}>
        <Text style={[styles.textTop, !calcText.topText && { opacity: 0.4 }]}>{displayText.topText}</Text>
        <View>
          <Text style={[styles.mainText, !!fontSize && { fontSize }, !calcText.mainText && { opacity: 0.1 }]}>{buttonText.mainText}</Text>
        </View>
        <Text style={[styles.textBottom, !calcText.bottomText && { opacity: 0.4 }]}>{buttonText.bottomText}</Text>
      </LinearGradient>
    </TouchableHighlight >
  )
}

export default MainButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  linearGradient: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    margin: 1,
    borderRadius: 5
  },
  mainText: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "Arial",
  },
  textTop: {
    position: "absolute",
    right: 2,
    top: 2,
    color: "orange",
    fontSize: 14,
    fontFamily: "Arial",
  },
  textBottom: {
    position: "absolute",
    right: 2,
    bottom: 2,
    color: "green",
    fontSize: 16,
    fontFamily: "Arial",
  },
});
