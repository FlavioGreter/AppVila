import React, { Fragment } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Cabecalho } from '../../componentes/cabecalho';
import Lista from '../../componentes/lista/lista';

const Inicial = () => {
    return (  
        <>
            <Cabecalho/>
            <Lista/>
        </>
    );
};



export default Inicial;