import React from 'react';
import FilmsStyle from '../../assets/style/films';
import {TouchableOpacity, View} from 'react-native';
import {NavigationService} from '../../navigation/navigationServices';
import {APP_SCREEN} from '../../navigation/screenTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const HeaderItem = () => (
  <View style={FilmsStyle.backButton}>
    <TouchableOpacity
      onPress={() => NavigationService.navigate(APP_SCREEN.All_FILMS)}>
      <Icon name="arrow-back" size={25} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name="heart" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

export default HeaderItem;
