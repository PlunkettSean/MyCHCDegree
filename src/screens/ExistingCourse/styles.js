import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 30,
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
    left: 150,
  },
  newCourseContainer: {
    padding: 15,
    width: '100%',
  },
  codeInput:{
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1.0,
    borderColor: 'lightgrey',
  },
  nameInput: {
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1.0,
    borderColor: 'lightgrey',
  },
  semesterInput: {
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1.0,
    borderColor: 'lightgrey',
  },
  creditsInput: {
    fontSize: 18,
    borderBottomWidth: 1.0,
    borderColor: 'lightgrey',
    marginBottom: 20,
  },
  dropDownButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderColor: 'lightgrey',
    borderWidth: 1.0,
  },
  dropDownButtonText: {
    textAlign: 'left',
    fontSize: 18,
  },
  dropDownStyle:{
  },
  dropDownRowStyle: {
    borderBottomColor: '#C5C5C5',
  },
  dropDownRowTextStyle: {
    textAlign: 'left',
    fontSize: 18,
  },
});

export default styles;
