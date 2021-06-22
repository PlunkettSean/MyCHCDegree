import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import SearchResultsScreen from '../screens/SearchResults';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
        />
        <Stack.Screen name={'Guests'} component={GuestsScreen} />
        <Stack.Screen name={'Search Results'} component={SearchResultsScreen} />
        <Stack.Screen name={'Post'} component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
