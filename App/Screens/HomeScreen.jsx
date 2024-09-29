import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../Utils/Colors'
import FONT from '../Utils/FONT'
import NavButton from '../Components/NavButton'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get("window")
export default function HomeScreen() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
            <Text style={[{color:COLORS.WHITE,}, FONT.title]}>Animations</Text>
        </View>
        <View style={{
            margin:20,
        }}>
        <NavButton title={"Basics"} onPress={()=>navigation.navigate("Basics")}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.WHITE,
    },
    header:{
        backgroundColor: COLORS.PRIMARY,
        padding:20,
    },
})