import {ImageBackground, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationService} from '../navigation/navigationServices';
import SplashImage from '../assets/images/splash.jpg';
import {APP_SCREEN} from '../navigation/screenTypes';

const Splash = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
    setTimeout(() => {
      NavigationService.navigate(APP_SCREEN.All_FILMS);
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
        source={SplashImage}
      />
    </View>
  );
};

export default Splash;
