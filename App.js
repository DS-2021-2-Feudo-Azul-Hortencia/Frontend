import React from 'react';
import Tela_de_inicio from './src/pages/Tela_de_inicio';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaDeInicio from './src/pages/Tela_de_inicio';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tela de Início"
          component={TelaDeInicio}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

