import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GET_FILMS} from '../graphQL';
import AllFilmsStyle from '../assets/style/allFilms';
import AccordionDetailsComponent from '../components/Accordion';
import NoDataFound from '../components/NoDataFound';
import {APP_SCREEN, RootStackParamList} from '../navigation/screenTypes';

export type AllFilmDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  APP_SCREEN.All_FILMS
>;

const AllFilmDetailsComponent: React.FC<AllFilmDetailsProps> = (
  props: AllFilmDetailsProps,
) => {
  const {navigation} = props;
  const {data, error, loading} = useQuery(GET_FILMS);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, []);

  if (error) {
    return <Text>Error</Text>;
  }

  if (loading) {
    return <Text>Loading .....</Text>;
  }

  if (data === undefined || data === null) {
    return <NoDataFound />;
  }

  return (
    <SafeAreaView style={AllFilmsStyle.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={AllFilmsStyle.container}>
        <AccordionDetailsComponent
          data={data.allFilms.films}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllFilmDetailsComponent;
