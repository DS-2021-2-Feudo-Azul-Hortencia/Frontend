import React from 'react';
import Login from './src/pages/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaDeInicio from './src/pages/login';

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

