import React from 'react'
import {Pressable, StyleSheet, Text} from 'react-native'

const Button = ({text, onPress, disabled}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={({pressed}) => ([styles.button, {opacity: disabled ? 0.2 : (pressed ? 0.8 : 1)}])}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 5
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default Button