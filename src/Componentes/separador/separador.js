import React from 'react';
import { View} from 'react-native';
import estilo from './estilo'

const  Separador = () => {
    return(
        <View style={estilo.conteinerDescricao}>
            <View style={estilo.separador}></View>
        </View>
    );
};

export default Separador;