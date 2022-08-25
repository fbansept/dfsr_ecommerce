import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Colors from '../Colors';

const Camera = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const utilisateur = route.params;

  

  return (
    <Text>Chargement</Text>
  );
};

export default Camera;
