import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Course = props => {
  const post = props.post;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Existing Course', {postId: post.id});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={{flex: 2}}>
          <Text style={styles.code}>{post.code}</Text>
          <Text numberOfLines={1} style={styles.name}>
            {post.name.length < 28
              ? `${post.name}`
              : `${post.name.substring(0, 28)}...`}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.semester}>{post.semester}</Text>
          <Text style={styles.credits}>{post.credits} cr.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Course;
