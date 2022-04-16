import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated
} from "react-native";

import Button from '../../components/Button';

import api from '../../services';

import styles from "./styles";

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(async () => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();

  }, []);


  const handleLogin = async () => {
    if (login.length > 1 && password.length > 1){
      api.post('/user/authenticate', { email: login, password })
        .then(async response => {
          await AsyncStorage.setItem('@user', response.data.user._id);
          setLogin('');
          setPassword('');
          navigation.navigate('TelaInicio')
        })
        .catch(err => {
          console.log(err)
          alert('Usuário ou senha inválidos')
        })

      //Como o token ainda não foi configurado, deixei comentada a parte da integração e coloquei a transição
      //entre a tela de login e de criação de tela no automático

    } else {
      alert('Usuário e senha devem ter mais de 1 caractere.')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.title}>S!MBORA</Text>
      </View>



      <Animated.View
        style={[
          styles.buttons,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          value={login}
          onChangeText={setLogin}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <Button text="Acessar" onPress={handleLogin} />
        <Button text="Criar sua conta" onPress={() => navigation.navigate('CreateAccount')} />
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
