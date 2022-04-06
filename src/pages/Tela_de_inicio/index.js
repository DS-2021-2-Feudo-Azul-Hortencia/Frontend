import React from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function TelaDeInicio() {
  return (
    <View style={styles.container}>  
      <Image
        style={{ width: 150, height: 100}}
        source={require('./images/logo.png')}
      />

      <Text style={styles.white1}>S!MBORA</Text>
     
      <TouchableOpacity 
        style={styles.button}
        onPress={console.log("Press")}>
          <Text style={styles.black1}>Criar Viagem</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={console.log("Press")}>
          <Text style={styles.black1}>Selecionar Viagem</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={console.log("Press")}>
          <Text style={styles.black1}>Trocar Usuário</Text>
      </TouchableOpacity>

      <Text style={styles.white2}>Usuário:</Text>
    
    </View>
  );
}