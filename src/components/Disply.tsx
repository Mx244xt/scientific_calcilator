import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  text: string[]
}

const Disply = ({ text }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {text.map((item, i) => {
        return (
          <Text key={i} style={styles.text} adjustsFontSizeToFit>{item}</Text>
        )
      })}
    </ScrollView>
  )
}

export default Disply

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B2CAAA",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 32,
    fontFamily: "Arial",
  },
})