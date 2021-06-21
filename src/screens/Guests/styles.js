import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#535151',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#a19f9f',
  },
  buttonText: {
    fontSize: 20,
    color: '#535151',
  },
  number: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});

export default styles;
