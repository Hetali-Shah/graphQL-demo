import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import AllFilmsStyle from '../assets/style/allFilms';

export const AccordionItem = ({
  children,
  title,
  expanded,
  onHeaderPress,
  onDetailsPress,
}) => {
  const renderItem = (item) => {
    return (
      <View style={AllFilmsStyle.accordBody}>
        <View style={AllFilmsStyle.accordBodyButton}>
          <Image source={{uri:`https://picsum.photos/200/200?random=${Math.random()}`}} style={{height:100, width:100}}/>
          <Text style={AllFilmsStyle.speciesText}>
            {item.name}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={AllFilmsStyle.accordContainer}>
      <View  style={AllFilmsStyle.accordView}>
        <TouchableOpacity
          style={AllFilmsStyle.accordHeader}
          onPress={onHeaderPress}>
          <Text style={AllFilmsStyle.accordTitle}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDetailsPress()} style={AllFilmsStyle.accordDetailsView}>
          <Icon name="chevrons-right" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {expanded && children && children.length > 0 && (
          <FlatList
            key={new Date()}
            horizontal={false}
            numColumns={3}
            data={children}
            renderItem={({ item }) => renderItem(item)}
          />
      )}
    </View>
  );
};
