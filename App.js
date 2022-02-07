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
import Experience from './screens/experience';
import Education from './screens/education';
import Projects from './screens/projects';
import Skills from './screens/skills';
import Courses from './screens/courses';

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

        <Stack.Screen
          name="Experience" component={Experience}
          options={{
            headerShown: false
          }} 
        />

        <Stack.Screen
          name="Education" component={Education}
          options={{
            headerShown: false
          }} 
        />

        <Stack.Screen
          name="Projects" component={Projects}
          options={{
            headerShown: false
          }} 
        />

        <Stack.Screen
          name="Skills" component={Skills}
          options={{
            headerShown: false
          }} 
        />

        <Stack.Screen
          name="Courses" component={Courses}
          options={{
            headerShown: false
          }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
