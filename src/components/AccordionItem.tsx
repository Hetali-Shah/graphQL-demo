import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AllFilmsStyle from '../assets/style/allFilms';
import StyleConfig from '../assets/style/config';

export const AccordionItem = ({
  children,
  title,
  expanded,
  onHeaderPress,
  onDetailsPress,
}) => {
  const renderItem = item => {
    return (
      <View style={AllFilmsStyle.accordBody}>
        <Image
          style={AllFilmsStyle.accordBodyImage}
          source={{
            uri: `https://picsum.photos/200/200?random=${Math.random()}`,
          }}
        />
        <Text style={AllFilmsStyle.speciesText} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={AllFilmsStyle.accordContainer}>
      <View style={AllFilmsStyle.accordView}>
        <TouchableOpacity
          style={AllFilmsStyle.accordHeader}
          onPress={onHeaderPress}>
          <Text style={AllFilmsStyle.accordTitle}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDetailsPress()}
          style={AllFilmsStyle.accordDetailsView}>
          <Icon name="chevron-right" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {expanded && children && children.length > 0 && (
        <FlatList
          style={{
            backgroundColor: StyleConfig.white,
            elevation: 8,
            padding: StyleConfig.countPixelRatio(5),
          }}
          key={new Date()}
          horizontal={false}
          numColumns={3}
          data={children}
          renderItem={({item}) => renderItem(item)}
        />
      )}
    </View>
  );
};
