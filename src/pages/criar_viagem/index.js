import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default function Login() {
  return (
     <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Text style={styles.white1}>Criar Viagem</Text>

          <Text style={styles.black1}>Nome da Viagem:</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.black1}>Início da Viagem:</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.black1}>Fim da Viagem:</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.black1}>País(es) da Viagem:</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.black1}>Cidade(s) da Viagem:</Text>
          <TextInput style={styles.input}/>
        
          <TouchableOpacity 
            style={styles.button}
            onPress={console.log("Press")}>
              <View style={styles.aligntxt}>
                <Text style={styles.black1}>Finalizar</Text>
              </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
     
  );
}