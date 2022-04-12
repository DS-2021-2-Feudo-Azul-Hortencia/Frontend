import React from 'react';
import Midia from './src/pages/midia';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mídia"
          component={Midia}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

