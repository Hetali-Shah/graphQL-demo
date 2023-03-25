import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Film from 'react-native-vector-icons/SimpleLineIcons';
import AllFilmsStyle from '../assets/style/allFilms';

export const AccordionItem = ({
  children,
  title,
  expanded,
  onHeaderPress,
  onDetailsPress,
}) => {
  const body =
    children &&
    children.map(item => (
      <View style={AllFilmsStyle.accordBody}>
        <Text style={AllFilmsStyle.filmName}>{item.name}</Text>
        <TouchableOpacity onPress={() => onDetailsPress(item.name)}>
          <Film name="film" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    ));

  const renderItem = (item) => {
    console.log("item", item)
    return (
      <Animated.View style={AllFilmsStyle.accordBody}>
        <TouchableOpacity onPress={() => onDetailsPress(item.name)} style={AllFilmsStyle.accordBodyButton}>
          <Film name="film" size={30} color="#000" />
        </TouchableOpacity>
      </Animated.View>
    )
  }

  return (
    <View style={AllFilmsStyle.accordContainer}>
      <TouchableOpacity
        style={AllFilmsStyle.accordHeader}
        onPress={onHeaderPress}>
        <Text style={AllFilmsStyle.accordTitle}>{title}</Text>
        {expanded ? (
          <Icon name="book-open" size={30} color="#000" />
        ) : (
          <Icon name="book" size={30} color="#000" />
        )}
      </TouchableOpacity>
      {/*{expanded && body}*/}
      {expanded && children && children.length > 0 && (
        <View style={{flexWrap: 'wrap'}}>
          <FlatList
            key={new Date()}
            horizontal={false}
            numColumns={3}
            data={children}
            renderItem={({ item }) => renderItem(item)}
          />
        </View>
      )}
    </View>
  );
};
