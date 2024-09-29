import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import CustomHeader from '../../Components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../Utils/Colors';
import Animated, {useSharedValue, useAnimatedStyle, withSpring, withRepeat} from 'react-native-reanimated';

const SIZE = 200;

export default function Basics() {
  const navigation = useNavigation();
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const handleRotate = (progress) => {
    "worklet";
    return `${progress.value * 2 * Math.PI}rad`; 
  };

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(0.5), -1, true);
  }, []);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        {scale: scale.value},
        {rotate: handleRotate(progress)}, 
      ],
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomHeader title="Home" onBackPress={() => navigation.goBack()} />
      {/* Content */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {backgroundColor: COLORS.PRIMARY, width: SIZE, height: SIZE},
            reanimatedStyle,
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
