/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/welcome';
import Home from './screens/home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome" component={Welcome}
          options={{
            headerShown: false
          }} 
        />
        <Stack.Screen
          name="Home" component={Home}
          options={{
            headerShown: false
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
