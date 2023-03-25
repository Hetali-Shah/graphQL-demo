import {ApolloClient, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache,
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});
