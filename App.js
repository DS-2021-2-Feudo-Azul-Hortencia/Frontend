import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UploadImages from "./src/pages/UploadImages";
import ListFiles from "./src/pages/LIstFiles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
