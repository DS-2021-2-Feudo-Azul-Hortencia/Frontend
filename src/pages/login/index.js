import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

import api from '../../services';

import styles from "./styles";

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
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


  const handleLogin = () => {
    if (login.length > 1 && password.length > 1){
      // api.post('/user/authenticate', { login, password })
      //   .then(response => {
      //     alert('logou')
      //     navigation.navigate('TravelCreate')
      //     console.log(response.data)
      //   })
      //   .catch(err => {
      //     alert('Usuário ou senha inválidos')
      //     console.log(err)
      //   })

      //Como o token ainda não foi configurado, deixei comentada a parte da integração e coloquei a transição
      //entre a tela de login e de criação de tela no automático


      navigation.navigate('TravelCreate')
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
          onChangeText={setLogin}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={handleLogin}>
          <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnRegisterText}>Criar sua conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
