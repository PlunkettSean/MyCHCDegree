import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown/src/SelectDropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NewCourseScreen = props => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const [credits, setCredits] = useState('');
  const [status, setStatus] = useState('');

  const onCourseAdd = () => {
    console.warn(
      'New Course Added: %s, %s, %s, %s',
      status,
      name,
      semester,
      credits,
    );
  };

  const statuses = ['Complete', 'In Progress', 'Not Complete'];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.button} onPress={onCourseAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
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
          onSelect={(selectedItem, index) => setStatus(selectedItem)}
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
        />
      </View>
    </View>
  );
};

export default NewCourseScreen;
