import React from 'react';
import {TextInput, Text, View, TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
import { FirebaseDB } from '../../database/firebaseDB';
import Estilo from './estilo';
import {Separador} from '../../componentes/separador';

const clicou = () =>{
    Alert.alert("Clicou no Cadastrar");
}

const Cadastro = () => {

//const dbRef = FirebaseDB.firestore().collection('pessoas');

    return(

        <ScrollView>

        
            <View>
                <Text style={Estilo.descricao}> Dados Pessoais do Aluno Vila</Text>
                <TextInput
                    placeholder={'Nome Completo'}
                    style={Estilo.input}
                    //value={this.state.name}
                    //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                />

                <TextInput
                    placeholder={'Cpf'}
                    style={Estilo.input}
                    //value={this.state.name}
                    //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                />
               
                <Text style={Estilo.descricao}>Endereco</Text>

                <TextInput
                    placeholder={'Rua ou Avenida'}
                    style={Estilo.input}
                    //value={this.state.name}
                    //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                />

                <TextInput
                    placeholder={'Número'}
                    style={Estilo.input}
                    //value={this.state.name}
                    //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                />
                <TextInput
                    placeholder={'Bairro'}
                    style={Estilo.input}
                    //value={this.state.name}
                    //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                />
               
                <Text style={Estilo.descricao}>Contato</Text>

                <TextInput
                    placeholder={'Whatsapp'}
                    style={Estilo.input}
                    //value={this.state.name}
                    //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                />

                <TextInput
                    placeholder={'Email'}
                    style={Estilo.input}
                    //value={this.state.name}
                    //onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                />

                

            </View>
            <TouchableOpacity
                        style={Estilo.botao}
                        //onPress={() => {this.clicou()}}
                        onPress={() => clicou()}
                >
                        <Text style={Estilo.botaoTexto}>Entrar</Text>
                </TouchableOpacity>
        </ScrollView>

    );
};

export default Cadastro;