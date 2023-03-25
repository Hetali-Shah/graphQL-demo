import React, {useState} from 'react';
import {LayoutAnimation} from 'react-native';
import { AccordionItem } from './AccordionItem';

export const Accordion = ({ data, navigation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeaderPress = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const onDetailsPress = (title, id) => {
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
          onDetailsPress={(title) => onDetailsPress(title, item.id)}
        >
          {item.speciesConnection && item.speciesConnection.species}
        </AccordionItem>
      ))}
    </>
  );
};
