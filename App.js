/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackView,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import Colors from './Colors';
import Header from './components/Header';
import Passager from './screens/Passager';
import Accueil from './screens/Accueil';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DetailVoyage from './screens/DetailVoyage';
import Camera from './screens/Camera';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Accueil" component={Accueil}></Stack.Screen>
          <Stack.Screen name="Passager" component={Passager}></Stack.Screen>
          <Stack.Screen
            name="Details voyage"
            component={DetailVoyage}
          ></Stack.Screen>
          <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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

export default App;
