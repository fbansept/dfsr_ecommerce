import React, {useEffect, useState} from 'react';
import {
  Alert,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import Colors from '../Colors';

const DetailVoyage = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const utilisateur = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  async function onPressButtonAutorisation() {
    await Linking.openSettings();
    setModalVisible(false);
  }

  async function onPressButtonPhoto() {
    let permission = await Camera.getCameraPermissionStatus();

    if (permission == 'authorized') {
      navigation.navigate('Camera');
    } else {
      const newCameraPermission = await Camera.requestCameraPermission();
      if (newCameraPermission == 'denied') {
        setModalVisible(true);
      }
    }
  }

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

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Modal visible={modalVisible} transparent={false} animation="slide">
        <Text>
          Pour utiliser cette fonctionalité vous devez accepter les
          autorisations
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressButtonAutorisation}
        >
          <Text style={styles.buttonText}>Changer les autorisations</Text>
        </TouchableOpacity>
      </Modal>
      <Text>{utilisateur.name}</Text>

      <TouchableOpacity style={styles.button} onPress={onPressButtonPhoto}>
        <Text style={styles.buttonText}>Prendre une photo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailVoyage;
