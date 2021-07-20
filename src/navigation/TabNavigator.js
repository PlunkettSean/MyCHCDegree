import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllScreen from '../screens/All';
import MajorScreen from '../screens/Major';
import CoreScreen from '../screens/Core';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'All'} component={AllScreen} />
      <Tab.Screen name={'Major'} component={MajorScreen} />
      <Tab.Screen name={'Core'} component={CoreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
