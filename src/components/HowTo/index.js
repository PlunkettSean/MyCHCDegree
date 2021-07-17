import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HowTo = props => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('How to', {postId: post.id});
  };
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image */}
      <Image source={post.image} style={styles.image} />
      {/* Description Text */}
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
      </Text>
    </Pressable>
  );
};

export default HowTo;
