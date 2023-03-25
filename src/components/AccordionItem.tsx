import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AllFilmsStyle from '../assets/style/allFilms';
import CommonStyle from '../assets/style/layout';

export const AccordionItem = ({
  children,
  title,
  expanded,
  onHeaderPress,
  onDetailsPress,
}: any) => {
  const renderItem = (item: any) => {
    return (
      <View style={CommonStyle.imagesView}>
        <View>
          <Image
            resizeMode="cover"
            source={{
              uri: `https://picsum.photos/200/200?random=${Math.random()}`,
              cache: 'reload',
            }}
            style={CommonStyle.accordBodyImage}
          />
          <Text style={CommonStyle.speciesText} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={AllFilmsStyle.accordContainer}>
      <View
        style={[
          AllFilmsStyle.accordView,
          expanded ? AllFilmsStyle.borderRadiusView : {},
        ]}>
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
        <View style={CommonStyle.imageView}>
          <FlatList
            keyExtractor={(item: any, index: number) => index}
            horizontal={false}
            numColumns={3}
            data={children}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
      )}
    </View>
  );
};
