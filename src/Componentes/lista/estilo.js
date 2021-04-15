import {StyleSheet } from 'react-native';

const Estilo = StyleSheet.create({
    imagemPerfil : {
        width : 40,
        height : 40,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 10
    },
    imagemCurso: {
        width : 20,
        height : 20,
        borderRadius: 10,
        marginTop: 0,
        marginLeft: 30
    },
    contentList : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'flex-start'
    },
    descricao : {
        marginLeft : 10,
        fontSize: 15
        //fontWeight: ''
    }

})

export default Estilo;