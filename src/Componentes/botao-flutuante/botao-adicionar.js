import React, { Component, useState } from 'react';
import {View , Image, Alert, Text} from 'react-native';
import Estilo from './estilo';
import { Tab} from 'react-native-elements'
import { COR_BOTOES, COR_DE_FUNDO } from '../../style/style';
import { useNavigation } from '@react-navigation/core';
import { FAB, Portal, Provider } from 'react-native-paper';


const BotaoFlutuanteAdicionar = () => {

    const navigation = useNavigation();
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
    return(
      
      <Provider>
        <Portal>
          <FAB.Group   
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              { icon: 'plus', 
              label: 'Cadastrar',
                onPress: () => navigation.push('Cadastro') },
              {
                icon: 'star',
                label: 'Agenda',
                onPress: () => navigation.push('Agenda'),
              },
              {
                icon: '',
                label: 'Sair',
                onPress: () => navigation.push('Login'),
              }
            ]}
            fabStyle={Estilo.botaoAdicionar}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
    </Provider>
    );
    
};

export default BotaoFlutuanteAdicionar;