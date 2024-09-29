import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FONT from '../Utils/FONT'
import { COLORS } from '../Utils/Colors'

export default function NavButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          elevation: 5, // Shadow for Android
        }
      ]}
    >
      <Text style={[FONT.subtitle, { color: COLORS.BLACK }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: COLORS.WHITE, 
  },
})
