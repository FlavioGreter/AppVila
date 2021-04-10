import React, { Fragment } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import estilo from './estilo';


const Cabecalho = () => {
    return (
        <Fragment>
            <SafeAreaView style={estilo.corFundo}> 
            <View style={estilo.contentTop}>
                <Image
                    source={require("../../../assets/vila.png")}
                    style={estilo.logo}
                />
                <TouchableOpacity>
                    <Image
                        source={require("../../../assets/menu.png")}
                        style={estilo.menuButton}
                    />
                </TouchableOpacity> 
            </View>
            </SafeAreaView>
            <View style={estilo.conteinerDescricao}>
                <View style={estilo.separador}></View>
            </View>
        </Fragment>
        
        
    );
};




export default Cabecalho;