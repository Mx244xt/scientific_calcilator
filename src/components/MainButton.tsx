import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from '../types/button';

const MainButton = ({ onPress, mainText, topText = "", bottomText = "" }: ButtonProps) => {
  return (
    <TouchableHighlight
      style={[styles.container, { borderRadius: 5 }]}
      activeOpacity={0.5}
      underlayColor="#FFA800"
      onPress={onPress}>
      <LinearGradient
        colors={['#6F6F6F', '#393939', '#232323']}
        style={styles.linearGradient}>
        <Text style={styles.textTop}>{topText}</Text>
        <View>
          <Text style={styles.mainText}>{mainText}</Text>
        </View>
        <Text style={styles.textBottom}>{bottomText}</Text>
      </LinearGradient>
    </TouchableHighlight>
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
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  textTop: {
    position: "absolute",
    right: 5,
    top: 5,
    color: "orange",
    fontSize: 12,
    fontFamily: "Arial",
  },
  textBottom: {
    position: "absolute",
    right: 5,
    bottom: 5,
    color: "green",
    fontSize: 12,
    fontFamily: "Arial",
  },
});
