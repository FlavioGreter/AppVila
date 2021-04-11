
import React, { Fragment , Component} from "react";
import { SafeAreaView } from 'react-native';
import {createAppContainerm } from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/views/login/login';
import {Inicial} from '../src/views/inicial';
import {Detalhe} from '../src/views/detalhe';

const Stack = createStackNavigator();

const App = () => {

  return (
    /*<NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    </NavigationContainer>  */   
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          <Stack.Screen 
            name="Inicial"
            component={Inicial}
            options={{headerShown: true}}
            
          />

          <Stack.Screen
            name="Detalhe"
            component={Detalhe}
            options={{headerShown: true}}
            
          />
        </Stack.Navigator>
    </NavigationContainer>   
  );
};

export default App;