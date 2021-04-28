
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/views/login/login';
import {Inicial} from '../src/views/inicial';
import {Detalhe} from '../src/views/detalhe';
import {Cadastro} from '../src/views/cadastro'
import { COR_DE_FUNDO } from "./style/style";
import { Agenda } from "./views/agenda";

const Stack = createStackNavigator();

const App = () => {

  return (
    
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
            options={{headerShown: false}}
            
          />

          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{headerBackTitleVisible: false}}
            
          />

          <Stack.Screen
            name="Detalhe"
            component={Detalhe}
            options={{headerBackTitleVisible: false}}
          />

          <Stack.Screen 
            name="Agenda"
            component={Agenda}
            options={{headerBackTitleVisible : false}}
          />

        </Stack.Navigator>
    </NavigationContainer>   
  );
};

export default App;