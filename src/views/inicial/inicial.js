import React, { Fragment } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import BotaoFlutuanteAdicionar from '../../componentes/botao-flutuante/botao-adicionar';
import { Cabecalho } from '../../componentes/cabecalho';
import Lista from '../../componentes/lista/lista';


const Inicial = () => {
    return (  
        <>
            <Cabecalho/>
            <Lista/>
            <BotaoFlutuanteAdicionar/> 
        </>
    );
};



export default Inicial;