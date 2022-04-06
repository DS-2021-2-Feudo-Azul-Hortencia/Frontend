import React from 'react';
import Login from './src/pages/criar_viagem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Criar Viagem"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

