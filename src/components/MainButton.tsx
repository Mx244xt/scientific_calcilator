import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ButtonProps } from '../types/button';

const MainButton = ({ setState, onPress, mainText, topText = "", bottomText = "", fontSize }: ButtonProps) => {
  return (
    <TouchableHighlight
      style={[styles.container, { borderRadius: 5 }]}
      activeOpacity={0.5}
      underlayColor="#FFA800"
      onPress={() => {
        onPress;
        { setState && mainText && setState(mainText) };
      }}>
      <LinearGradient
        colors={['#6F6F6F', '#393939', '#232323']}
        style={styles.linearGradient}>
        <Text style={styles.textTop}>{topText}</Text>
        <View>
          <Text style={[styles.mainText, !!fontSize && { fontSize }]}>{mainText}</Text>
        </View>
        <Text style={styles.textBottom}>{bottomText}</Text>
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
