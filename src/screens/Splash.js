import {ImageBackground, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationService} from '../navigation/navigationServices';
import SplashImage from '../assets/images/splash.jpg';
import {APP_SCREEN} from '../navigation/screenTypes';
import SplashStyle from '../assets/style/splash';
import Loader from '../components/Loader';

const Splash = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
    setTimeout(() => {
      NavigationService.navigate(APP_SCREEN.All_FILMS);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        style={SplashStyle.imageBackground}
        resizeMode="cover"
        source={SplashImage}>
        <Loader isAppText={true} loaderStyle={SplashStyle.splashLoaderView} />
      </ImageBackground>
    </View>
  );
};

export default Splash;
