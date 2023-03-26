import React, {useState} from 'react';
import {LayoutAnimation} from 'react-native';
import {AccordionItem, IMAGES} from './AccordionItem';
import {NavigationService} from '../navigation/navigationServices';
import {APP_SCREEN} from '../navigation/screenTypes';

export interface starWarsProps {
  data: starWarsData[];
  navigation: any;
  totalCount: number;
}

export interface starWarsData {
  id: string;
  title: string;
  speciesConnection: object;
}

const AccordionDetailsComponent = (props: starWarsProps) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeaderPress = (index: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const onDetailsPress = (title: string, id: string) => {
    NavigationService.navigate(APP_SCREEN.FILMS, {
      id: id,
      title: title,
    });
    props.navigation.navigate('Films', {headerName: title, id});
    setExpandedIndex(null);
  };

  return (
    <>
      {props.data &&
        props.data.map((item: any, index: number) => (
          <AccordionItem
            key={index}
            title={item.title}
            image={
              [].concat(...new Array(props.totalCount).fill(IMAGES))[index]
            }
            expanded={expandedIndex === index}
            onHeaderPress={() => handleHeaderPress(index)}
            onDetailsPress={() => onDetailsPress(item.title, item.id)}>
            {item.speciesConnection && item.speciesConnection.species}
          </AccordionItem>
        ))}
    </>
  );
};

export default AccordionDetailsComponent;
