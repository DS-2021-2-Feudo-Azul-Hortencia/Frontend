import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListFiles from "./src/pages/LIstFiles";
import TravelList from './src/pages/TravelList';
import TelaInicio from './src/pages/TelaInicio';
import TravelFiles from './src/pages/TravelFiles';
import TravelCreate from './src/pages/TravelCreate';
import UploadImages from "./src/pages/UploadImages";
import CreateAccount from './src/pages/CreateAccount';
import Login from './src/pages/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#333333D0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="ListFiles"
          component={ListFiles}
          options={{
            title: 'Arquivos de VIagem',
          }}
        />
        <Stack.Screen
          name="UploadFiles"
          component={UploadImages}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="TravelCreate"
          component={TravelCreate}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TravelList"
          component={TravelList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TelaInicio"
          component={TelaInicio}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TravelFiles"
          component={TravelFiles}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
