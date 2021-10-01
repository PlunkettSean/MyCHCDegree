import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown/src/SelectDropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import courses from '../../../assets/data/courses';

const ExistingCourseScreen = props => {
  const route = useRoute();

  console.warn(route.params.postId)

  const [post, setPost] = useState([]);

  const getCourseByID = (id) => {
    courseDB.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM ${tableName} WHERE id IN ('${id}') LIMIT 1`,
        [],
        (sqlTxn, res) => {
          console.log("Courses retrieved successfully");
          let len = res.rows.length;
          console.warn(len)
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, code: item.code, name: item.name, credits: item.credits, semester: item.semester, status: item.status, designator: item.designator });
              console.log(results[i])
            }
            setPost(results);
          }
        },
        error => {
          console.log("error on getting courses " + error.message);
        },
      );
    });
  }

  const onCourseUpdate = () => {
    console.warn(designator);
  };

  const onCourseDelete = () => {
    console.warn('Course Deleted!');
  };

  const statuses = ['Complete', 'In Progress', 'Not Complete'];
  const designators = ['1st Major', '2nd Major', '1st Minor', '2nd Minor', 'Core', 'Elective', 'General Elective']

  useEffect(async () => {
    await getCourseByID(route.params.postId);
  }, []);

  const [code, setCode] = useState(post.code);
  const [name, setName] = useState(post.name);
  const [semester, setSemester] = useState(post.semester);
  const [credits, setCredits] = useState(post.credits);
  const [status, setStatus] = useState(post.status);
  const [designator, setDesignator] = useState(post.designator);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onCourseUpdate}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onCourseDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newCourseContainer}>
        <TextInput
          value={code}
          onChangeText={value => setCode(value)}
          style={styles.codeInput}
          placeholder={'Code'}
          placeholderTextColor={'grey'}
          clearButtonMode={'while-editing'}
          maxLength={8}
        />
        <TextInput
          value={name}
          onChangeText={value => setName(value)}
          style={styles.nameInput}
          placeholder={'Name'}
          placeholderTextColor={'grey'}
          clearButtonMode={'while-editing'}
        />
        <TextInput
          value={semester}
          onChangeText={value => setSemester(value)}
          style={styles.semesterInput}
          placeholder={'Semester'}
          placeholderTextColor={'grey'}
          clearButtonMode={'while-editing'}
          maxLength={11}
        />
        <TextInput
          value={credits}
          onChangeText={value => setCredits(value)}
          style={styles.creditsInput}
          placeholder={'Credits'}
          placeholderTextColor={'grey'}
          clearButtonMode={'while-editing'}
          keyboardType={'numeric'}
          maxLength={1}
        />
        <SelectDropdown
          data={statuses}
          value={status}
          onSelect={(selectedItem) => setStatus(selectedItem)}
          defaultButtonText={'Status ...'}
          buttonStyle={styles.dropDownButton}
          buttonTextStyle={styles.dropDownButtonText}
          renderDropdownIcon={() => {
            return (
              <FontAwesome name={'chevron-down'} color={'lightgrey'} size={18} />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropDownStyle}
          rowStyle={styles.dropDownRowStyle}
          rowTextStyle={styles.dropDownRowTextStyle}
          defaultValue={post.status}
        />
        <SelectDropdown
          data={designators}
          value={designator}
          onSelect={(selectedItem) => setDesignator(selectedItem)}
          defaultButtonText={'Designator ...'}
          buttonStyle={styles.dropDownButton}
          buttonTextStyle={styles.dropDownButtonText}
          renderDropdownIcon={() => {
            return (
              <FontAwesome name={'chevron-down'} color={'lightgrey'} size={18} />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropDownStyle}
          rowStyle={styles.dropDownRowStyle}
          rowTextStyle={styles.dropDownRowTextStyle}
          defaultValue={post.designator}
        />
      </View>
    </View>
  );
};

export default ExistingCourseScreen;
