import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from '../types/button';

const SubButton = ({ onPress, mainText, topRightText = "", topLeftText = "", bgColor, fontColor }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textTopContainer}>
        {topLeftText && <Text style={styles.textLeftTop} >{topLeftText}</Text>}
        {topRightText && <Text style={styles.textRightTop} >{topRightText}</Text>}
      </View>
      <TouchableHighlight
        style={styles.TouchableHighlight}
        activeOpacity={0.1}
        underlayColor="#FFA800"
        onPress={onPress}
      >
        <LinearGradient
          colors={bgColor ? [bgColor, bgColor] : ['#E4E6F3', '#80828D', '#5E5F61']}
          style={styles.linearGradient}>
          <Text style={[styles.mainText, !!fontColor && { color: fontColor }]}>{mainText}</Text>
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