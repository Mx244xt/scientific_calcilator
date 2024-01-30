import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from '../types/button';

const SubButton = ({ onPress, mainText, topText = "" }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop} >{topText}</Text>
      <TouchableHighlight
        style={[styles.button, { borderRadius: 5 }]}
        activeOpacity={0.1}
        underlayColor="#FFA800"
        onPress={onPress}
      >
        <View>
          <LinearGradient
            colors={['#E4E6F3', '#80828D', '#5E5F61']}
            style={styles.linearGradient}>
            <Text style={styles.mainText}>{mainText}</Text>
          </LinearGradient>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default SubButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end"
  },
  linearGradient: {
    justifyContent: "center",
    alignItems: "center",
    height: 34,
    margin: 1,
    borderRadius: 2
  },
  mainText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Arial",
  },
  textTop: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "orange",
    fontSize: 14,
    fontFamily: "Arial",
  },
});