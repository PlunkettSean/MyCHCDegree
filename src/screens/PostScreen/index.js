import React from 'react';
import {View} from 'react-native';
import places from '../../../assets/data/feed';
import DetailPost from '../../components/DetailPost';
import {useRoute} from '@react-navigation/native';

const PostScreen = props => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);
  return (
    <View>
      <DetailPost post={post} />
    </View>
  );
};

export default PostScreen;
