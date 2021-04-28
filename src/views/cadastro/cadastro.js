import React from 'react';
import { useState } from 'react';
import {TextInput, Text, View, TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
import Estilo from './estilo';
import { cadastrarPessoa } from '../../database/pessoaDb';

const clicou = () =>{
    Alert.alert("Clicou no botão cadastrar");
    
}

const Cadastro = () => {


var [nome, setNome]         = useState('');
var [cpf, setCpf]           = useState('');
var [rua, setRua]           = useState('');
var [numero, setNumero]     = useState('');
var [bairro, setBairro]     = useState('');
var [whatsapp, setWhatsapp] = useState('');
var [email, setEmail]       = useState('');

function  limparFormulario ()
{
    setNome('');
    setCpf('');
    setRua('');
    setNumero('');
    setBairro('');
    setWhatsapp('');
    setEmail('');
}

function msgSucesso()
{
    Alert.alert("Sucesso!" , "Aluno cadastrado.");
}

const pessoa = {
    nome :      nome,
    cpf :       cpf,
    rua :       rua,
    numero :    numero,
    bairro :    bairro,
    whatsapp :  whatsapp,
    email :     email,
    pessoaTipo : 'Aluno'
  };


  function insert(value) 
  {
       if(cadastrarPessoa(value))
       {
            msgSucesso();
            limparFormulario();
       } 
  }


    return(

        <ScrollView>

            <View>
                <Text style={Estilo.descricao}> Dados Pessoais do Aluno Vila</Text>
                <TextInput
                    placeholder={'Nome Completo'}
                    style={Estilo.input}
                    value={nome}
                    onChangeText={(value) => setNome(value)}
                />
            </View>

            <TextInput
                placeholder={'Cpf'}
                style={Estilo.input}
                value={cpf}
                onChangeText={(value) => setCpf(value)}
            />
            

            <Text style={Estilo.descricao}>Endereco</Text>

                <TextInput
                    placeholder={'Rua ou Avenida'}
                    style={Estilo.input}
                    value={rua}
                    onChangeText={(value) => setRua(value)}
                />

                <TextInput
                    placeholder={'Número'}
                    style={Estilo.input}
                    value={numero}
                    onChangeText={(value) => setNumero(value)}
                />
                <TextInput
                    placeholder={'Bairro'}
                    style={Estilo.input}
                    value={bairro}
                    onChangeText={(value) => setBairro(value)}
                />
               
                <Text style={Estilo.descricao}>Contato</Text>

                <TextInput
                    placeholder={'Whatsapp'}
                    style={Estilo.input}
                    value={whatsapp}
                    onChangeText={(value) => setWhatsapp(value)}
                />

                <TextInput
                    placeholder={'Email'}
                    style={Estilo.input}
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />

                <TouchableOpacity
                            style={Estilo.botao}
                            //onPress={() => {this.clicou()}}
                            onPress={() => insert(pessoa)}
                    >
                            <Text style={Estilo.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>

        </ScrollView>

    );
};

export default Cadastro;

