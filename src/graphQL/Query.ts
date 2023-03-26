import {gql} from '@apollo/client';

export const GET_FILMS = gql`
  query AllFilms {
    allFilms {
      totalCount
      films {
        id
        title
        speciesConnection {
          species {
            name
          }
        }
      }
    }
  }
`;

export const GET_FILM_BY_ID = gql`
  query GetFilm($id: ID!) {
    film(id: $id) {
      created
      director
      id
      producers
      releaseDate
      title
      openingCrawl
    }
  }
`;
