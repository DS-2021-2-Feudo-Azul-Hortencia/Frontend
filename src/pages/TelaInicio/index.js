import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';

export default function TelaDeInicio() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>  
      <View style={styles.flexBox}>
        <Text style={styles.title}>S!MBORA</Text>
      </View>
      <View style={styles.flexBox}>
        <Button text="Criar Viagem" onPress={() => navigation.navigate('TravelCreate')}/>
        <Button text="Selecionar Viagem" onPress={() => navigation.navigate('TravelList')}/>
        <Button text="Trocar Usuário" onPress={async () => {
          await AsyncStorage.clear()
          navigation.navigate('Login')
        }}/>
      </View>
    </View>
  );
}