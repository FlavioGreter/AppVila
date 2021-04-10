import React, { Fragment , Component} from "react";
import {Text,
        TextInput, 
        StyleSheet, 
        Image, 
        View,
        Button,
        TouchableOpacity,
        Alert} 
from "react-native"
import estilo from './estilo'


const Login = () => {

  clicou = () => {
    Alert.alert("Connectando...", "Você clicou no botão")
  }

  return (
    <View style={estilo.container}>
      <Image 
        source={require('../../../assets/vila.png')}
        style={estilo.logo}
      />

      <TextInput
        placeholder="Usuário"
        style={estilo.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={estilo.input}
      />

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => {this.clicou()}}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
    
  );
};



export default Login;