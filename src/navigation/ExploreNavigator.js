import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={'Search Results'} component={SearchResultsScreen} />
    </Stack.Navigator>
  );
};

export default Router;