import React from 'react';
import {View, Text, Image} from "react-native";
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{uri: post.image}}
        style={styles.image} />
      {/* Bed & Bedroom Text */}
      <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
      {/* Type & Description Text */}
      <Text style={styles.description} numberOfLines={2}>{post.type} {post.title}</Text>
      {/* Old & New Price Text */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      {/* Total Price Text */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
