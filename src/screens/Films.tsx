import React, {useCallback, useEffect, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_FILM_BY_ID} from '../graphQL';
import NoDataFound from '../components/NoDataFound';
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

  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e: any): void => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
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

  const {title, director, releaseDate, openingCrawl, created, producers} =
    data.film;

  return loading ? (
    <Loader loaderStyle={SplashStyle.loaderView} />
  ) : (
    <ScrollView style={FilmsStyle.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        style={FilmsStyle.imageBackGround}
        resizeMode="cover"
        source={{uri: `https://picsum.photos/200/200?random=${Math.random()}`}}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={{height: '100%', width: '100%'}}>
          <View style={FilmsStyle.safeAreaMainView}>
            <HeaderItem />
            <View style={{paddingTop: 150}}>
              <Text style={FilmsStyle.bookTitle}>{title}</Text>
              <View style={FilmsStyle.dateView}>
                <View style={FilmsStyle.dateNestedView}>
                  <FontAwesome5 name="calendar-alt" size={10} color="#fff" />
                  <Text style={FilmsStyle.dateText}>
                    {new Date(releaseDate).toISOString().substring(0, 10)}
                  </Text>
                </View>
                <Text style={{fontSize: 20}}>|</Text>
                <View style={FilmsStyle.dateNestedView}>
                  <FontAwesome5 name="calendar-alt" size={10} color="#fff" />
                  <Text style={FilmsStyle.dateText}>2020</Text>
                </View>
                <Text style={{fontSize: 20}}>|</Text>
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
                        <Entypo name="download" size={20} color="red" />
                      </View>

                      <View style={{flex: 0.3, alignItems: 'flex-end'}}>
                        <FontAwesome5 name="share" size={20} color="red" />
                      </View>
                    </View>
                  </View>

                  <View style={FilmsStyle.openingCrawlMainView}>
                    <Text
                      style={FilmsStyle.openingCrawText}
                      onTextLayout={onTextLayout}
                      numberOfLines={textShown ? undefined : 3.8}>
                      {openingCrawl.replace(/[\r\n]/gm, '')}
                    </Text>
                    {/*{
                    lengthMore ? <Text
                        onPress={toggleNumberOfLines}
                        style={{ lineHeight: 21, marginTop: 10 }}>{textShown ? 'Read less' : 'Read more'}</Text>
                      :null
                  }*/}
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
        <Text style={FilmsStyle.producerTitleText}>
          {producers.length > 1 ? 'Producers' : 'Producer'}
        </Text>
        <View style={FilmsStyle.imageView}>
          <FlatList
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            data={producers}
            renderItem={({item}) => (
              <View style={FilmsStyle.imagesView}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: `https://picsum.photos/200/200?random=${Math.random()}`,
                    cache: 'reload',
                  }}
                  style={CommonStyle.accordBodyImage}
                />
                <Text style={[CommonStyle.speciesText, {width: '80%'}]}>
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
