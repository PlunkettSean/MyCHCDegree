import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        {/* Adults Row */}
        <View style={styles.row}>
          {/* Text */}
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.subtitle}>Ages 13 or above</Text>
          </View>
          {/* Buttons with Text */}
          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.number}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          {/* Adults Row */}
        </View>

        {/* Children Row */}
        <View style={styles.row}>
          {/* Text */}
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.subtitle}>Ages 2 - 12</Text>
          </View>
          {/* Buttons with Text */}
          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.number}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          {/* Children Row */}
        </View>

        {/* Infants Row */}
        <View style={styles.row}>
          {/* Text */}
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.subtitle}>Under 2</Text>
          </View>
          {/* Buttons with Text */}
          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.number}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          {/* Infants Row */}
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'Search Results',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;