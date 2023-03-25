import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import { FilmsTabs } from './src/navigation/routes'
import { navigationRef } from './src/navigation/navigationServices'
import {apolloClient} from './src/graphQL';


const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer ref={navigationRef}>
        <FilmsTabs/>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
