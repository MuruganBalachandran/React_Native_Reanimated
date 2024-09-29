import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Basics from '../Screens/1.Basics/Basics';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer
    
    >
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Basics" component={Basics} />
  </Stack.Navigator>
  </NavigationContainer>
  )
}
