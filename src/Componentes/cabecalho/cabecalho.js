import React, { Fragment } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import estilo from './estilo';


const Cabecalho = () => {
    return (
        //<SafeAreaView style={estilo.corFundo}> 
            <View style={estilo.contentTop }>
                <Image
                    source={require("../../assets/vila.png")}
                    style={estilo.logo}
                />
                
            </View>
       // </SafeAreaView>  
    );
};

export default Cabecalho;