import React from 'react';
import {View, Text, SectionList} from 'react-native';
import all from '../../../assets/data/all';
import styles from './styles';
import Course from '../../components/Course';
import NewCourseButton from '../../components/NewCourseButton';

const AllScreen = props => {
  return (
    <View>
      <View>
        <SectionList
          sections={all}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Course post={item} />}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.completeContainer}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
            </View>
          )}
        />
      </View>
      <NewCourseButton />
    </View>
  );
};

export default AllScreen;
