import React, {useState} from 'react';
import FilmsStyle from '../../assets/style/films';
import {TouchableOpacity, View} from 'react-native';
import {NavigationService} from '../../navigation/navigationServices';
import {APP_SCREEN} from '../../navigation/screenTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeaderItem = () => {
  const [onSelectHeart, setOnSelectHeart] = useState(false);
  return (
    <View style={FilmsStyle.backButton}>
      <TouchableOpacity
        onPress={() => NavigationService.navigate(APP_SCREEN.All_FILMS)}>
        <Icon name="arrow-back" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOnSelectHeart(!onSelectHeart)}>
        <FontAwesome
          name={onSelectHeart ? 'heart' : 'heart-o'}
          size={25}
          color="#ff4343"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderItem;
