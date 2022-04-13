import React from 'react';
import Login from './src/pages/criar_viagem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UploadImages from './src/pages/UploadImages';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Criar Viagem"
          component={Login}
        /> */}
        <Stack.Screen
          name="Criar Viagem"
          component={UploadImages}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

