import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

    logo: {
        width:60,
        height:60,
        marginBottom: 8
    },
    contentTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    menuButton: {
        width: 40,
        height: 40
    },
    corFundo: {
        backgroundColor: '#2c3e50'
    },

    //Estilo Separador
    conteinerDescricao: {
        paddingHorizontal: 30
    },
    separador: {
        borderWidth: 0.5,
        borderColor: '#A1A5AA',
        marginTop: 2,
        
    }
})

export default estilo;