import {ImageBackground, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationService} from '../navigation/navigationServices';
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
        source={{
          uri: `https://picsum.photos/200/200?random=${Math.random()}`,
        }}
      />
    </View>
  );
};

export default Splash;
