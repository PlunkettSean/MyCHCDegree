import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import feed from '../../../assets/data/searchfeed';

const HowToDetail = props => {
  const post = props.post;
  const ListHeader = () => {
    return (
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={feed}
        renderItem={({item}) => (
          <Image source={item.image} style={styles.image} />
        )}
      />
    </View>
  );
};

export default HowToDetail;
