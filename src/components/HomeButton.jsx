import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const HomeButton = ({navigation}) => {
  return (
    <TouchableHighlight style={styles.button} onPress={()=>{navigation.navigate('Calculator')}}>
      <Text style={styles.buttonText}>Let's Start</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 67,
        backgroundColor: 'rgba(0,0,0,0.75)',
        borderRadius: 40,
        width: 237,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '15%',
        borderColor: 'white',
        borderWidth: 0.5,
      },
      buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
      }
})

export default HomeButton