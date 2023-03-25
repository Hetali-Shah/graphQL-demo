import SplashStyle from '../assets/style/splash';
import Lottie from 'lottie-react-native';
import {Animated, Easing, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Loader = ({isAppText = false, loaderStyle}: any) => {
  const animationProgress = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={loaderStyle}>
      <Lottie
        style={{height: 75}}
        source={require('../assets/images/98432-loading.json')}
        progress={animationProgress.current}
      />
      {isAppText && (
        <View style={{flexDirection: 'row'}}>
          <Text style={SplashStyle.appText}>Fun</Text>
          <Text style={[SplashStyle.appText, {color: '#525bb7'}]}>2</Text>
          <Text style={SplashStyle.appText}>Watch</Text>
        </View>
      )}
    </View>
  );
};

export default Loader;
