import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import the Ionicons from the icon package
import { COLORS } from '../Utils/Colors';
import FONT from '../Utils/FONT';

export default function CustomHeader({ title, onBackPress }) {
  return (
    <View style={styles.headerContainer}>
      {/* Back button */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={COLORS.WHITE} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.headerTitle, FONT.subtitle]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.PRIMARY
  },
  backButton: {
    paddingRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    color:COLORS.WHITE
    
  },
})
