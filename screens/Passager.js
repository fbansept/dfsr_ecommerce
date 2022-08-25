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

const Passager = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [listeUtilisateur, setListeUtilisateur] = useState([]);

  useEffect(() => {
    //pour atteindre le PC hote (si emulateur) ip : 10.0.2.2
    //si le téléphone est en USB : partagez votre connexion de donnée,
    // et l'IP sera celle de votre PC (sur le reseau wifi)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(json => json.json())
      .then(res => setListeUtilisateur(res));
  }, []);

  const styles = StyleSheet.create({
    item: {
      height: 50,
      padding: 10,
      margin: 10,
      elevation: 10,
      shadowColor: '#52006A',
      backgroundColor: 'white',
    },
  });

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {listeUtilisateur.map(utilisateur => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Details voyage', utilisateur)}
          key={utilisateur.id}
          style={styles.item}
        >
          <View>
            <Text>{utilisateur.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Passager;
