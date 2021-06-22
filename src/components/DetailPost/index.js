import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const DetailPost = props => {
  const post = props.post;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image */}
        <Image source={{uri: post.image}} style={styles.image} />
        {/* Bed & Bedroom Text */}
        <Text style={styles.bedrooms}>
          {post.bed} bed {post.bedroom} bedroom
        </Text>
        {/* Type & Description Text */}
        <Text style={styles.description} numberOfLines={2}>
          {post.type} {post.title}
        </Text>
        {/* Old & New Price Text */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice}</Text>
          <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
        </Text>
        {/* Total Price Text */}
        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        {/* Long Description */}
        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailPost;
