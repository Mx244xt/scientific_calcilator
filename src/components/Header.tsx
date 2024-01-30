import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Normal</Text>
      <Text style={styles.text}>DEC</Text>
      <Text style={styles.text}>[DEG]</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  text: {
    color: "white",
    fontFamily: "Arial",
  },
})