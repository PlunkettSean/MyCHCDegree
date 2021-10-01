import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>My CHC Degree</Text>
      </ImageBackground>
      {/* Button */}
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Get started!')}>
          <AntDesign name="user" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}> Get started!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
