import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'center',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 10,
    alignSelf: 'center',
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 14,
    color: '#9e9a9a',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    paddingTop: 10,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#9e9a9a',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#9e9a9a',
    textDecorationLine: 'underline',
  },
});

export default styles;
