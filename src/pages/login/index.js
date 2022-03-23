import React, {useState, useEffect} from 'react';
import { Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
}  from 'react-native';

import styles from './styles';



export default function Login() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}))
  const [opacity] = useState(new Animated.Value(0));

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
      })
    ]).start();
  }, [])

  return (
    <KeyboardAvoidingView style={styles.container}>


      <View style={styles.containerLogo}>
        <Text style={styles.title}>S!MBORA</Text>
      </View>

      <View>
        <Image
        source={require('./apoio/user.png')}
        />
      </View>


      <Animated.View
       style={[
         styles.buttons,
        {
          opacity: opacity,
          transform: [
            {translateY: offset.y}
          ]
        }
        ]}
       >
        <TextInput
        style={styles.input}
        placeholder='Email'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnRegisterText}>Criar sua conta</Text>
        </TouchableOpacity>
      </Animated.View>

    </KeyboardAvoidingView>
  );
}
