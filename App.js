import React from 'react';
import Login from './src/pages/Login';
import TravelCreate from './src/pages/TravelCreate';
import TravelList from './src/pages/TravelList';
import TelaInicio from './src/pages/TelaInicio';
import TravelFiles from './src/pages/TravelFiles';
import CreateAccount from './src/pages/CreateAccount';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TravelList' screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="TravelCreate"
          component={TravelCreate}
        />
        <Stack.Screen
          name="TravelList"
          component={TravelList}
        />
        <Stack.Screen
          name="TelaInicio"
          component={TelaInicio}
        />
        <Stack.Screen
          name="TravelFiles"
          component={TravelFiles}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

