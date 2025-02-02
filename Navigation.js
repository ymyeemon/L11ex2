import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home.js";
import Welcome from "./Welcome.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Welcome' component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;