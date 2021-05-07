import React, { Fragment } from 'react';
import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Alert} from 'react-native';
import Estilo from './estilo';
import {Separador} from '../separador';
import { useNavigation } from "@react-navigation/core";
import { ListItem, Avatar } from 'react-native-elements'




clicou = () => {
    Alert.alert("Carregando Detalhe...", "Você clicou no botão")
}

const Lista = ({lista}) => {
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        
        <TouchableOpacity onPress={() =>   navigation.push('Detalhe')}>
            <ListItem bottomDivider> 
                <Avatar source={item.FotoPerfil} />
                <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>
                    <View>
                        <Text>
                            descricao
                        </Text> 
                    </View> 
                    <Image
                        source={require('../../assets/icon-violao.webp')}
                        style={Estilo.imagemCurso}
                    />
                </ListItem.Subtitle>
                
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </TouchableOpacity>

    )
    
      return (
        <FlatList
        //  keyExtractor={(item, index) => index.toString()}  
          data={lista}
          keyExtractor={item => item.id}  
          renderItem={renderItem}
        />
      )

};

export default Lista;