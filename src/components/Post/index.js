import React from 'react';
import {View, Text, Image} from "react-native";
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
        style={styles.image} />
      {/* Bed & Bedroom Text */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      {/* Type & Description Text */}
      <Text style={styles.description} numberOfLines={2}>Entire Flat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      {/* Old & New Price Text */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30 </Text>/ night
      </Text>
      {/* Total Price Text */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
