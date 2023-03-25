import React, {useState} from 'react';
import {LayoutAnimation} from 'react-native';
import { AccordionItem } from './AccordionItem';
import {NavigationService} from '../navigation/navigationServices';
import {APP_SCREEN} from '../navigation/screenTypes';

export const Accordion = ({ data, navigation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeaderPress = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const onDetailsPress = (title, id) => {
    NavigationService.navigate(APP_SCREEN.FILMS, {
      id: id,
      title: title
    });
    navigation.navigate('Films', {headerName: title, id})
    setExpandedIndex(null)
  }

  return (
    <>
      {data && data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          expanded={expandedIndex === index}
          onHeaderPress={() => handleHeaderPress(index)}
          navigation={navigation}
          onDetailsPress={() => onDetailsPress(item.title, item.id)}
        >
          {item.speciesConnection && item.speciesConnection.species}
        </AccordionItem>
      ))}
    </>
  );
};
