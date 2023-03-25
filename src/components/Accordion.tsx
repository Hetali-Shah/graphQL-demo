import React, {useState} from 'react';
import {LayoutAnimation} from 'react-native';
import { AccordionItem } from './AccordionItem';
import {NavigationService} from '../navigation/navigationServices';
import { APP_SCREEN } from "../navigation/screenTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface Props {
  data: any,
  navigation: any
}

export type AccordionDetailsProps = NativeStackScreenProps<any | undefined>

const AccordionDetailsComponent: React.FC<AccordionDetailsProps> = (
  props: AccordionDetailsProps
) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeaderPress = (index : null) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const onDetailsPress = (title: string, id: string) => {
    NavigationService.navigate(APP_SCREEN.FILMS, {
      id: id,
      title: title
    });
    props.navigation.navigate('Films', {headerName: title, id})
    setExpandedIndex(null)
  }

  return (
    <>
      {props.data && props.data.map((item: any, index: number) => (
        <AccordionItem
          key={index}
          title={item.title}
          expanded={expandedIndex === index}
          onHeaderPress={() => handleHeaderPress(index)}
          navigation={props.navigation}
          onDetailsPress={() => onDetailsPress(item.title, item.id)}
        >
          {item.speciesConnection && item.speciesConnection.species}
        </AccordionItem>
      ))}
    </>
  );
}

export default AccordionDetailsComponent;
