import React, { Fragment } from 'react';
import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import Estilo from './estilo';
import {Separador} from '../separador';

const MockList = [
    {
        Id : '1',
        Nome : 'Francisco Pereira da Silva',
        FotoPerfil : '../../assets/icon-homem.png',
        Sexo : 'm'
    },
    {
        Id : '2',
        Nome : 'Ricardo Oliveira',
        FotoPerfil : '../../assets/icon-homem.png',
        Sexo : 'm'
    },
    {
        Id : '3',
        Nome : 'Luan Batista',
        FotoPerfil : '../../assets/icon-homem.png',
        Sexo : 'm'
    },
    {
        Id : '4',
        Nome : 'Luana Ferrarini',
        FotoPerfil : '../../assets/icon-mulher.png',
        Sexo : 'f'
    },
    {
        Id : '5',
        Nome : 'Barbari Rosa',
        FotoPerfil : '../../assets/icon-homem.png',
        Sexo : 'm'
    },
    {
        Id : '6',
        Nome : 'Dandara Batista',
        FotoPerfil : '../../assets/icon-mulher.png',
        Sexo : 'f'
    },
    {
        Id : '7',
        Nome : 'Poliana Daguia Ferraz',
        FotoPerfil : '../../assets/icon-mulher.png',
        Sexo : 'f'
    },
    {
        Id : '8',
        Nome : 'Luciano Pereira Filho',
        FotoPerfil : '../../assets/icon-homem.png',
        Sexo : 'm'
    },
    {
        Id : '9',
        Nome : 'Amanda Da Costa',
        FotoPerfil : '../../assets/icon-mulher.png',
        Sexo : 'f'
    }
];

const renderItem = ({item}) =>(
    
    <SafeAreaView>
        <TouchableOpacity>
            <View style={Estilo.contentList}>
                <Image 
                    source={require('../../assets/icon-mulher.png')}
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
    </SafeAreaView>  
);

const Lista = () => {
    return(
       
        <FlatList
            data={MockList}
            renderItem={renderItem}
            keyExtractor={item => item.Id}
        />
    );
};

export default Lista;