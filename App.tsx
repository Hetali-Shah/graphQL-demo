import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllFilms from './src/screens/AllFilms';
import Films from './src/screens/Films';
import {apolloClient} from './src/graphQL';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllFilms"
            component={AllFilms}
            options={{
              title: 'All Films',
              headerStyle: {
                backgroundColor: '#6A5C7F',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Films"
            component={Films}
            options={{
              headerStyle: {
                backgroundColor: '#273C5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
