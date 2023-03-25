import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageBackground, StatusBar, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import {GET_FILM_BY_ID} from "../graphQL"
import NoDataFound from "../components/NoDataFound";
import FilmsStyle from "../assets/style/films";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from "react-native-linear-gradient"
import {APP_SCREEN, RootStackParamList} from '../navigation/screenTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from 'react-native-vector-icons/Feather';
import { NavigationService } from "../navigation/navigationServices";

export type FilmDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  APP_SCREEN.FILMS
>
const FilmDetailsComponent: React.FC<FilmDetailsProps> = (
  props: FilmDetailsProps,
) => {
  let {route: {params}, navigation} = props
  let id = params.id
  const { loading, error, data } = useQuery(GET_FILM_BY_ID, {
    variables: { id },
  });

  const [textShown, setTextShown] = useState(false)
  const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
  }

  const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  },[]);

  useEffect(() => {
    navigation.setOptions({
      headerShown:false,
      headerTransparent:true
    });
  }, []);

  if (error) {
    return <Text>Error</Text>;
  }

  if (loading) {
    return <Text>Loading .....</Text>;
  }

  if(data === undefined || data === null) {
    return <NoDataFound/>
  }

  const { title, director, releaseDate, openingCrawl, created, producers } = data.film;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor='transparent' />
      <ImageBackground
        style={FilmsStyle.imageBack}
        source={{uri: `https://picsum.photos/200/200?random=${Math.random()}`}}
      >
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={{height : '80%', width : '100%'}}>
          <SafeAreaView style={{flex:1}}>
            <View style={FilmsStyle.safeAreaMainView}>
              <View style={FilmsStyle.backButton}>
                <TouchableOpacity onPress={() => NavigationService.navigate(APP_SCREEN.All_FILMS)} >
                  <Icon name="arrow-back" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="heart" size={25} color="#fff" />
                </TouchableOpacity>
              </View>

              <View style={{ paddingTop: 100}}>
                <Text style={FilmsStyle.bookTitle}>{title}</Text>
                <View style={FilmsStyle.dateView}>
                  <View style={FilmsStyle.dateNestedView}>
                    <FontAwesome5 name="calendar-alt" size={10} color="#fff" />
                    <Text style={FilmsStyle.dateText}>{new Date(releaseDate).toISOString().substring(0, 10)}</Text>
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
                <View style={{
                  height:'68%',
                  display:'flex'
                }}>
                  <View style={{marginTop:'auto'}}>
                  <View style={FilmsStyle.openingCrawlMainView}>
                    <Text style={FilmsStyle.openingCrawTitleText}>OpeningCrawl</Text>
                    <View style={FilmsStyle.openingCrawlIconView}>
                      <View style={{ flex:0.7, alignItems:'flex-end'}}>
                        <Entypo name="download" size={20} color="red" />
                      </View>

                      <View style={{flex:0.3, alignItems:'flex-end'}}>
                        <FontAwesome5 name="share" size={20} color="red" />
                      </View>
                    </View>
                  </View>

                  <View style={FilmsStyle.openingCrawlMainView}>
                    <Text style={FilmsStyle.openingCrawText}
                          onTextLayout={onTextLayout}
                          numberOfLines={textShown ? undefined : 3.8}
                    >{openingCrawl.replace(/[\r\n]/gm, '')}
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
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}
export default FilmDetailsComponent
