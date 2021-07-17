import React from 'react';
import {View} from 'react-native';
import places from '../../../assets/data/searchfeed';
import HowToDetail from '../../components/HowToDetail';
import {useRoute} from '@react-navigation/native';

const HowToDetailScreen = props => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);
  return (
    <View>
      <HowToDetail post={post} />
    </View>
  );
};

export default HowToDetailScreen;
