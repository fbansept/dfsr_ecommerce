import React from 'react';
import {Text, useColorScheme} from 'react-native';
import Colors from '../Colors';

const Passager = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <Text>PassagerS</Text>;
};

export default Passager;
