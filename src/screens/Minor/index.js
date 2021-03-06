import React, { useEffect, useState } from 'react';
import { View, Text, SectionList } from 'react-native';
import styles from './styles';
import Course from '../../components/Course';
import NewCourseButton from '../../components/NewCourseButton';
import { useNavigation } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';

const database = require('../../components/Handlers/database.js');

const tableName = 'courses';

const courseDB = openDatabase({ name: 'CourseList.db' });

const MinorScreen = props => {
  const [completeCourses, setCompleteCourses] = useState([]);
  const [inProgressCourses, setInProgressCourses] = useState([]);
  const [notCompleteCourses, setNotCompleteCourses] = useState([]);

  const getStatusCourses = (status) => {
    courseDB.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM ${tableName} WHERE status IN ('${status}') AND designator IN ('1st Minor', '2nd Minor')`,
        [],
        (sqlTxn, res) => {
          console.log("Courses retrieved successfully");
          let len = res.rows.length;
          // console.warn(len)
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, code: item.code, name: item.name, credits: item.credits, semester: item.semester, status: item.status, designator: item.designator });
              console.log(results[i])
            }
            if (status == "Complete") {
              setCompleteCourses(results);
            }
            else if (status == "In Progress") {
              setInProgressCourses(results);
            }
            else {
              setNotCompleteCourses(results);
            }

            // console.warn('[DATA]', results[0])
          }
        },
        error => {
          console.log("error on getting courses " + error.message);
        },
      );
    });
  }

  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStatusCourses("Complete");
      getStatusCourses("In Progress");
      getStatusCourses("Not Complete");
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(async () => {
    await getStatusCourses("Complete");
    await getStatusCourses("In Progress");
    await getStatusCourses("Not Complete");
  }, []);

  var complete = 0;
  var inProgress = 0;
  var notComplete = 0;

  for (var i = 0; i < completeCourses.length; i++) {
    complete += completeCourses[i].credits;
  }
  for (var i = 0; i < inProgressCourses.length; i++) {
    inProgress += inProgressCourses[i].credits;
  }
  for (var i = 0; i < notCompleteCourses.length; i++) {
    notComplete += notCompleteCourses[i].credits;
  }

  return (
    <View>
      <View>
        <SectionList style={styles.outer}
          sections={[
            { title: 'Courses Complete ' + complete + ' cr.', data: completeCourses },
            { title: 'Courses In Progress ' + inProgress + ' cr.', data: inProgressCourses },
            { title: 'Courses Not Complete ' + notComplete + ' cr.', data: notCompleteCourses },
          ]}
          renderItem={({ item }) => <Course post={item} />}
          renderSectionHeader={({ section }) => (
            <View style={styles.completeContainer}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{section.title}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
      <NewCourseButton />
    </View>
  );
};
export default MinorScreen;
