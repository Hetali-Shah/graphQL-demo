import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GET_FILMS} from '../graphQL';
import AllFilmsStyle from '../assets/style/allFilms';
import AccordionDetailsComponent from '../components/Accordion';
import NoDataFound from '../components/NoDataFound';
import {APP_SCREEN, RootStackParamList} from '../navigation/screenTypes';
import Loader from '../components/Loader';
import SplashStyle from '../assets/style/splash';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
      headerShown: true,
      headerLeft: () => (
        <View style={{right: 10}}>
          <Entypo name="menu" size={30} color="#fff" />
        </View>
      ),
      headerRight: () => <FontAwesome5 name="search" size={20} color="#fff" />,
    });
  }, []);

  if (error) {
    return <NoDataFound />;
  }

  if (data === undefined || data === null) {
    if (loading) {
      return <Loader loaderStyle={SplashStyle.loaderView} />;
    } else {
      return <NoDataFound />;
    }
  }

  if (loading) {
    return <Loader loaderStyle={SplashStyle.loaderView} />;
  }

  return (
    <SafeAreaView style={AllFilmsStyle.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={AllFilmsStyle.container}>
        <AccordionDetailsComponent
          totalCount={data.allFilms.totalCount}
          data={data.allFilms.films}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllFilmDetailsComponent;
