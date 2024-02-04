import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

type Props = {
  displayText: string[];
}

const Disply = ({ displayText }: Props) => {

  return (
    <ScrollView style={styles.container}>
      {displayText.map((item, i) => {
        return (
          <View style={styles.textContainer}>
            <TextInput key={i} style={styles.text}
              inputMode="none"
              multiline={true}
              value={item}
            >
            </TextInput>
          </View>
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
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontFamily: "Arial",
  },
})