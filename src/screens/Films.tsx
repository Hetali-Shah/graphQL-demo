import React, {useEffect} from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import SeeMore from 'react-native-see-more-inline';
import {useQuery} from '@apollo/client';
import {GET_FILM_BY_ID} from '../graphQL';
import FilmsStyle from '../assets/style/films';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {APP_SCREEN, RootStackParamList} from '../navigation/screenTypes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import StyleConfig from '../assets/style/config';
import CommonStyle from '../assets/style/layout';
import HeaderItem from '../components/Films/HeaderItem';
import Loader from '../components/Loader';
import SplashStyle from '../assets/style/splash';
import NoDataFound from '../components/NoDataFound';

export const IMAGES = [
  require('../assets/images/1.jpg'),
  require('../assets/images/2.jpg'),
  require('../assets/images/3.jpg'),
  require('../assets/images/4.jpg'),
  require('../assets/images/5.jpg'),
  require('../assets/images/6.jpg'),
  require('../assets/images/7.jpg'),
];

export const PRODUCERS = [
  require('../assets/images/user1.jpeg'),
  require('../assets/images/user2.jpeg'),
  require('../assets/images/user3.jpeg'),
];

export type FilmDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  APP_SCREEN.FILMS
>;
const FilmDetailsComponent: React.FC<FilmDetailsProps> = (
  props: FilmDetailsProps,
) => {
  let {
    route: {params},
    navigation,
  } = props;
  let id = params.id;
  const {loading, error, data} = useQuery(GET_FILM_BY_ID, {
    variables: {id},
  });

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
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

  const {title, director, releaseDate, openingCrawl, created, producers} =
    data && data.film;

  return (
    <ScrollView style={FilmsStyle.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        style={FilmsStyle.imageBackGround}
        resizeMode="cover"
        source={IMAGES[Math.floor(Math.random() * IMAGES.length)]}>
        <LinearGradient
          colors={['#00000020', '#000000']}
          style={{height: '100%', width: '100%'}}>
          <View style={FilmsStyle.safeAreaMainView}>
            <HeaderItem />
            <View style={{paddingTop: 100}}>
              <Text style={FilmsStyle.bookTitle}>{title}</Text>
              <View style={FilmsStyle.dateView}>
                <View style={FilmsStyle.dateNestedView}>
                  <FontAwesome5 name="calendar-alt" size={10} color="#fff" />
                  <Text style={FilmsStyle.dateText}>
                    Release Date :{' '}
                    {new Date(releaseDate).toISOString().substring(0, 10)}
                  </Text>
                </View>
                <Text style={FilmsStyle.pipeSign}>|</Text>
                <View style={FilmsStyle.dateNestedView}>
                  <Text style={FilmsStyle.dateText}>{director}</Text>
                </View>
              </View>
              <View style={FilmsStyle.openingView}>
                <View style={{marginTop: 'auto'}}>
                  <View style={FilmsStyle.openingCrawlMainView}>
                    <Text style={FilmsStyle.openingCrawTitleText}>
                      OpeningCrawl
                    </Text>
                    <View style={FilmsStyle.openingCrawlIconView}>
                      <View style={{flex: 0.7, alignItems: 'flex-end'}}>
                        <Entypo name="download" size={20} color="#ff4343" />
                      </View>

                      <View style={{flex: 0.3, alignItems: 'flex-end'}}>
                        <FontAwesome5 name="share" size={20} color="#ff4343" />
                      </View>
                    </View>
                  </View>

                  <View style={FilmsStyle.openingCrawlMainView}>
                    <SeeMore
                      seeMoreText={'Read More'}
                      seeLessText={'Read Less'}
                      numberOfLines={4}
                      style={FilmsStyle.openingCrawText}>
                      {openingCrawl.replace(/[\r\n]/gm, '')}
                    </SeeMore>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: StyleConfig.countPixelRatio(15),
        }}>
        <View style={FilmsStyle.createdDateView}>
          <Text style={FilmsStyle.createdDate}>
            Created Date :{' '}
            {new Date(releaseDate).toISOString().substring(0, 10)}
          </Text>
        </View>
        <Text style={FilmsStyle.producerTitleText}>
          {producers.length > 1 ? 'Producers' : 'Producer'}
        </Text>
        <View style={FilmsStyle.imageView}>
          <FlatList
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            data={producers}
            renderItem={({item, index}) => (
              <View>
                <Image
                  resizeMode="cover"
                  source={
                    [].concat(...new Array(producers.length).fill(PRODUCERS))[
                      index
                    ]
                  }
                  style={FilmsStyle.imageSize}
                />
                <Text
                  style={[
                    CommonStyle.speciesText,
                    {width: 100, paddingLeft: StyleConfig.countPixelRatio(8)},
                  ]}>
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default FilmDetailsComponent;
