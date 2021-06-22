import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'} component={SearchResultsScreen} />
      <Tab.Screen name={'Map'} component={SearchResultsScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
