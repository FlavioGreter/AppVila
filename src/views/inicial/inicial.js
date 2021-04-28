import React, { Fragment } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import BotaoFlutuanteAdicionar from '../../componentes/botao-flutuante/botao-adicionar';
import { Cabecalho } from '../../componentes/cabecalho';
import Lista from '../../componentes/lista/lista';
import {listarPessoas} from '../../database/pessoaDb';


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



const Inicial = () => {
    return (  
        <>
            <Cabecalho/>
            <Lista lista={MockList}/>
            <BotaoFlutuanteAdicionar/> 
            
        </>
    );
};



export default Inicial;