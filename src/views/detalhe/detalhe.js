import React from 'react';
import {Text, View, Image} from 'react-native';
import { Separador } from '../../componentes/separador';
import Estilo from './estilo';

const Detalhe = () => {
    return (
        <>    
            <View style={Estilo.container}>
                <Image 
                    source={require("../../assets/icon-homem.png")}
                    style={Estilo.fotoPerfil}
                />
                <Text style={Estilo.nome}>Nome do Aluno</Text>
                <Image
                    source={require('../../assets/icon-violao.webp')}
                    style={Estilo.imagemCurso}
                />
                
            </View>
            <Separador/>
            <View style={Estilo.containerDescricao}>
                <Text style={Estilo.negrito}>Curso : </Text>
                <Text style={Estilo.descricao}>Violão</Text>           
            </View>

            <View style={Estilo.containerDescricao}>
                <Text style={Estilo.negrito}>Horário : </Text>
                <Text style={Estilo.descricao}>14:15 às 15:15</Text>           
            </View>

            <View style={Estilo.containerDescricao}>
                <Text style={Estilo.negrito}>Professor : </Text> 
                <Text style={Estilo.descricao}> Silas Vila Nova </Text>          
            </View>

            <View style={Estilo.containerDescricao}>
                <Text style={Estilo.negrito}>Data de Início : </Text>
                <Text style={Estilo.descricao}>01/01/2021</Text>         
            </View>

            





            
                
                
        </>
        
    );
};

export default Detalhe;