import React from 'react';
import {View, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import HowTo from '../../components/HowTo';

const HowToScreen = props => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <HowTo post={item} />} />
    </View>
  );
};

export default HowToScreen;
