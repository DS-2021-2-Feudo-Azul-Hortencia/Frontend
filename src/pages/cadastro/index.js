import React, { useState } from 'react';
import { View } from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Styles from './styles.js';
import {
  useFonts,
  ReadexPro_400Regular
} from '@expo-google-fonts/readex-pro'
import AppLoading from 'expo-app-loading';

const Cadastro = () => {
  const[fontsLoaded] = useFonts(ReadexPro_400Regular)
  const[name, setName] = useState(null)
  const[email, setEmail] = useState(null)
  const[password, setPassword] = useState(null)

  if(fontsLoaded){
    <AppLoading/>
  }
  return (
    <View style={Styles.conteiner}>
      <Text h4>   S!MBORA</Text>
      <Text h4></Text>
      <Text h1> Criar sua conta</Text>
      <Text h4></Text>
      <Text h7>   Digite seus dados, faça as malas</Text>
      <Text h7>   e aproveite os serviços que o S!MBORA</Text>
      <Text h7>   tem a oferecer.</Text>
      <Text></Text>
      <Input
       font-family = {({theme}) => theme.fonts.text}
       placeholder="Digite seu nome"
       leftIcon={{ type: 'font-awesome', name: 'user' }}
       onChangeText={value => setName(value)}
       />
      <Input
       placeholder="Digite seu email"
       leftIcon={{ type: 'font-awesome', name: 'envelope' }}
       onChangeText={value => setEmail(value)}
       keyboardType='email-adress'
      />
      <Input
       placeholder="Digite sua senha"
       leftIcon={{ type: 'font-awesome', name: 'lock' }}
       onChangeText={value => setPassword(value)}
       secureTextEntry={true}
      />
      <Input
       placeholder="Confirme sua senha"
       leftIcon={{ type: 'font-awesome', name: 'lock' }}
       onChangeText={value => setPassword(value)}
       secureTextEntry={true}
      />
      <Button
              title="Criar conta"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 8,
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 40,
                marginVertical:20,
              }}
            />
    </View>
  );
}

export default Cadastro;