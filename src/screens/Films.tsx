import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useQuery } from "@apollo/client";
import {GET_FILM_BY_ID} from "../graphQL"
import NoDataFound from "../components/NoDataFound";
import FilmsStyle from "../assets/style/films";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {APP_SCREEN, RootStackParamList} from '../navigation/screenTypes';

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

  useEffect(() => {
    navigation.setOptions({
      headerTitle: params.headerName
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
    <View style={FilmsStyle.mainView}>
      <View style={FilmsStyle.filmTextView}>
        <Text style={FilmsStyle.filmText}>Title : {title}</Text>
        <Text style={FilmsStyle.filmText}>Director : {director}</Text>
        <Text style={FilmsStyle.filmText}>Producers : {producers}</Text>
        <Text style={FilmsStyle.filmText}>ReleaseDate : {new Date(releaseDate).toISOString().substring(0, 10)}</Text>
        <Text style={FilmsStyle.filmText}>Created : {new Date(created).toISOString().substring(0, 10)}</Text>
        <Text style={FilmsStyle.filmText}>OpeningCrawl : {openingCrawl}</Text>
      </View>
    </View>
  )
}
export default FilmDetailsComponent
