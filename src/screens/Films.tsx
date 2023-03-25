import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import { useQuery } from "@apollo/client";
import {GET_FILM_BY_ID} from "../graphQL"


const FilmDetails = ({ navigation, route:{params} }) => {
  let id = params.id
  const { loading, error, data } = useQuery(GET_FILM_BY_ID, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  const { title, director, releaseDate, openingCrawl, created, producers } = data.film;
  console.log("=========", data.film)

  return (
    <View>
      <Text style={{color:'black'}}>Director: {director}</Text>
      <Text style={{color:'black'}}>Release Date: {releaseDate}</Text>
      <Text style={{color:'black'}}>title: {title}</Text>
      <Text style={{color:'black'}}>openingCrawl: {openingCrawl}</Text>
      <Text style={{color:'black'}}>created: {new Date(created).toISOString().substring(0, 10)}</Text>
      <Text style={{color:'black'}}>producers: {producers}</Text>
    </View>
  )
}

export default FilmDetails
