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

const DetailVoyage = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const utilisateur = route.params;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>{utilisateur.name}</Text>
    </ScrollView>
  );
};

export default DetailVoyage;
