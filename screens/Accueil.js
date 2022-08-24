import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Colors from '../Colors';
import Header from '../components/Header';

const Accueil = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      <View
        style={[
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
          styles.container,
        ]}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conducteur</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Passager')}
        >
          <Text style={styles.buttonText}>Passagers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 2,
    width: '50%',
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default Accueil;
