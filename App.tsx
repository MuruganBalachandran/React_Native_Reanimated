import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { COLORS } from './App/Utils/Colors'
import StackNavigation from './App/Navigation/StackNavigation'

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle={"light-content"}/>
      <StackNavigation/>
    </GestureHandlerRootView>
  )
}