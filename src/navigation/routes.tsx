import React from 'react';
import {APP_SCREEN, RootStackParamList} from './screenTypes';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import AllFilms from '../screens/AllFilms';
import Films from '../screens/Films';
import StyleConfig from '../assets/style/config';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const filmsTabs: React.FC = () => {
  const options: NativeStackNavigationOptions = {
    title: 'All Films',
    headerStyle: {
      backgroundColor: StyleConfig.newBlue,
    },
    headerTintColor: StyleConfig.white,
    headerTitleStyle: {
      fontFamily: StyleConfig.bold,
      fontSize: StyleConfig.fontSizeH2,
    },
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          presentation: 'card',
        }}>
        <Stack.Screen
          name={APP_SCREEN.All_FILMS}
          options={options}
          component={AllFilms}
        />
        <Stack.Screen
          name={APP_SCREEN.FILMS}
          options={options}
          component={Films}
        />
      </Stack.Navigator>
    </View>
  );
};

export const FilmsTabs = filmsTabs;
