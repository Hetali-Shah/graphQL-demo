import React from 'react';
import {useQuery} from '@apollo/client';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {GET_FILMS} from '../graphQL';
import AllFilmsStyle from '../assets/style/allFilms';
import {Accordion} from '../components/Accordion';

const AllFilms = ({navigation}) => {
  const {data, error, loading} = useQuery(GET_FILMS);

  if (error) {
    console.error(error);
    return <Text>Error</Text>;
  }

  if (loading) {
    return <Text>Loading .....</Text>;
  }

  return (
    <SafeAreaView style={AllFilmsStyle.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={AllFilmsStyle.container}>
        <Accordion data={data.allFilms.films} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllFilms;
