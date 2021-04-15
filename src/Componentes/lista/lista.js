import React, { Fragment } from 'react';
import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Alert} from 'react-native';
import Estilo from './estilo';
import {Separador} from '../separador';
import { useNavigation } from "@react-navigation/core";


const MockList = [
    {
        Id : '1',
        Nome : 'Francisco Pereira da Silva',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'm'
    },
    {
        Id : '2',
        Nome : 'Ricardo Oliveira',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'm'
    },
    {
        Id : '3',
        Nome : 'Luan Batista',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'm'
    },
    {
        Id : '4',
        Nome : 'Luana Tabalaki',
        FotoPerfil : require('../../assets/icon-mulher.png'),
        Sexo : 'f'
    },
    {
        Id : '5',
        Nome : 'Barbari Rosa',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'm'
    },
    {
        Id : '6',
        Nome : 'Paulo Rogério',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'f'
    },
    {
        Id : '7',
        Nome : 'Poliana Daguia Ferraz',
        FotoPerfil : require('../../assets/icon-mulher.png'),
        Sexo : 'f'
    },
    {
        Id : '8',
        Nome : 'Luciano Pereira Filho',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'm'
    },
    {
        Id : '9',
        Nome : 'Amanda Da Costa',
        FotoPerfil : require('../../assets/icon-mulher.png'),
        Sexo : 'f'
    },
    {
        Id : '10',
        Nome : 'Leonardo Silva',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'm'
    },
    {
        Id : '11',
        Nome : 'Fernanda Mode',
        FotoPerfil : require('../../assets/icon-mulher.png'),
        Sexo : 'm'
    },
    {
        Id : '12',
        Nome : 'Karla Luizza',
        FotoPerfil : require('../../assets/icon-mulher.png'),
        Sexo : 'm'
    },
    {
        Id : '13',
        Nome : 'Pedro Parros',
        FotoPerfil : require('../../assets/icon-homem.png'),
        Sexo : 'f'
    },
    {
        Id : '14',
        Nome : 'Rosana Ferrarini',
        FotoPerfil : require('../../assets/icon-mulher.png'),
        Sexo : 'm'
    }
];


clicou = () => {
    Alert.alert("Carregando Detalhe...", "Você clicou no botão")
}




const Lista = () => {

    const navigation = useNavigation();
    
    const Item = ({item}) =>(
     
        <TouchableOpacity onPress={() => navigation.push('Detalhe')}>
            <View style={Estilo.contentList}>
                <Image 
                    source={item.FotoPerfil}
                    style={Estilo.imagemPerfil}
                />
                <Text style={Estilo.descricao}>{item.Nome}</Text>    
            </View>
            <Image
                source={require('../../assets/icon-violao.webp')}
                style={Estilo.imagemCurso}
            />
            <Separador/>
        </TouchableOpacity>        
        
    );

    

    
    return(
        <FlatList
        data={MockList}
        renderItem={Item}
        keyExtractor={item => item.Id}        
        />  
    );
};

export default Lista;