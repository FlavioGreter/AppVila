import React, { Fragment } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Cabecalho } from '../../cabecalho';
import Lista from '../../lista/lista';

const Inicial = () => {
    return (  
        <>
            <Cabecalho/>
            <Lista/>
        </>
    );
};



export default Inicial;