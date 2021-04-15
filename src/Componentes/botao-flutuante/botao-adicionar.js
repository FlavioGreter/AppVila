import React from 'react';
import {View , Image, Alert} from 'react-native';
import Estilo from './estilo';
import { FloatingAction } from "react-native-floating-action";
import { COR_BOTOES, COR_DE_FUNDO } from '../../style/style';
import { useNavigation } from '@react-navigation/core';


const actions = [
    {
        text: "Cadastrar",
        icon: require("../../assets/vila.png"),
        name: "Cadastro",
        position: 1,
        color : COR_BOTOES,
        buttonSize: 40,
        margin: 8
      },
      {
        text: "Sair",
        icon: require("../../assets/vila.png"),
        name: "Login",
        position: 2,
        color :"red",
        buttonSize: 40,
        margin : 8
      },
    /*
    
    
    {
      text: "Location",
      icon: require("../../assets/menu.png"),
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      icon: require("../../assets/menu.png"),
      name: "bt_videocam",
      position: 4
    }*/
  ];



const BotaoFlutuanteAdicionar = () => {

    const navigation = useNavigation();
    return(
       // <Text style={Estilo.botaoAdicionar}>ADICIONAR ALUNOS</Text>

        <View>
            
            <FloatingAction 
                actions={actions}
                onPressItem={name => {navigation.push(`${name}`)
                //console.log(`selected button: ${name}`);
                //Alert.alert(`Select button : ${name}`);
                }}
                color={COR_DE_FUNDO}
                
                
                
                
            />
        </View>

    );
};

export default BotaoFlutuanteAdicionar;