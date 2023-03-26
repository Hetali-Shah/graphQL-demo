import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AllFilmsStyle from '../assets/style/allFilms';
import CommonStyle from '../assets/style/layout';

export const IMAGES = [
  require('../assets/images/1.jpg'),
  require('../assets/images/2.jpg'),
  require('../assets/images/3.jpg'),
  require('../assets/images/4.jpg'),
  require('../assets/images/5.jpg'),
  require('../assets/images/6.jpg'),
  require('../assets/images/7.jpg'),
];

export const AccordionItem = ({
  children,
  title,
  expanded,
  onHeaderPress,
  onDetailsPress,
  image,
}: any) => {
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
          <Image
            resizeMode="cover"
            source={image}
            style={CommonStyle.imagesView}
          />
          <View style={{flex: 0.8}}>
            <Text style={AllFilmsStyle.accordTitle}>{title}</Text>
          </View>
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
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            data={children}
            renderItem={({item, index}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  resizeMode="cover"
                  source={
                    [].concat(
                      ...new Array(children ? children.length : 6).fill(IMAGES),
                    )[index]
                  }
                  style={CommonStyle.accordBodyImage}
                />
                <Text style={CommonStyle.speciesText}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};
