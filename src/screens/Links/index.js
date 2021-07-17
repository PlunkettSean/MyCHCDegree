import React from 'react';
import {View, FlatList} from 'react-native';
import feed from '../../../assets/data/linkfeed';
import Link from '../../components/Link';

const LinksScreem = props => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Link post={item} />} />
    </View>
  );
};

export default LinksScreem;
