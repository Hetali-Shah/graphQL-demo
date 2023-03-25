import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GET_FILMS} from '../graphQL';
import AllFilmsStyle from '../assets/style/allFilms';
import AccordionDetailsComponent from '../components/Accordion';
import NoDataFound from '../components/NoDataFound';
import {APP_SCREEN, RootStackParamList} from '../navigation/screenTypes';
import Loader from '../components/Loader';
import SplashStyle from '../assets/style/splash';
import Lottie from 'lottie-react-native';

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
    return <NoDataFound />;
  }

  return loading ? (
    <Loader loaderStyle={SplashStyle.loaderView} />
  ) : (
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
