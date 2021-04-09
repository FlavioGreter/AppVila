import React, { Fragment } from "react";
import {Text,
        TextInput, 
        StyleSheet, 
        Image, 
        View,
        Button,
        TouchableOpacity,
        Alert} 
from "react-native"
import Login from "./src/Componentes/Views/Login/Login";

const App = () => {

  clicou = () => {
    Alert.alert("Connectando...", "Você clicou no botão")
  }

  return (
    <View style={estilo.container}>
      <Image 
        source={require('./src/Assets/vila.png')}
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

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 10
    },
    input: {
      marginTop: 10,
      width: 300,
      backgroundColor: '#fff',
      fontWeight: 'bold',
      borderRadius: 3
    },
    botao: {
      marginTop: 10,
      width: 200,
      height: 42,
      backgroundColor: '#3498db',
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoTexto : {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    }
})

export default App;