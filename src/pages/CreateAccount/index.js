import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Animated,
  ActivityIndicator
} from "react-native";

import Button from '../../components/Button';
import api from '../../services';
import styles from "./styles";


export default function CreateAccount({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  const [data, setData] = useState({
    email: null,
    name: null,
    password: null,
    passwordConfirm: null
  })

  const [loading, setLoading] = useState(false)

  const handleCreate = () => {
    if(!Object.values(data).every(value => value && value.length > 1)){
      alert('Todos os campos devem ser preenchidos.')
    } else {
      setLoading(true)
      api.post('/user/registration', data)
        .then(async response => {
          await AsyncStorage.setItem('@user', response.data.user._id);
          navigation.navigate('TelaInicio')
          setLoading(false)
        })
        .catch(err => {
          if(err.response.data){
            console.log(err.response.data);
            alert(err.message.data.error)
          }else{
            alert('Dados inválidos')
          }
          setLoading(false)
        })
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.title}>S!MBORA</Text>
      </View>

      <Text style={styles.subtitle}>Crie a sua conta</Text>


      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu email"
          autoCorrect={false}
          keyboardType="email"
          onChangeText={email => setData({...data, email})}
          value={data.email}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome"
          autoCorrect={false}
          onChangeText={name => setData({...data, name})}
          value={data.name}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={password => setData({...data, password})}
          value={data.password}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme a sua senha"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={passwordConfirm => setData({...data, passwordConfirm})}
          value={data.passwordConfirm}
        />
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <Button text="Criar conta" onPress={handleCreate} disabled={loading}/>

        </View>

    </KeyboardAvoidingView>
  );
}