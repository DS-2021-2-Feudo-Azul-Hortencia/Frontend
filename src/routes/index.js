import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cadastro } from '../pages/cadastro';
import Login from '../pages/login';

const { Navigator, Screen } = createNativeStackNavigator();


export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator >
        <Screen name="registro" component={Cadastro} />
        <Screen name="login" component={Login} />
      </Navigator>
    </NavigationContainer>
  )
}
