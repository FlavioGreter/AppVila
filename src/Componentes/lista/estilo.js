import {StyleSheet } from 'react-native';

const Estilo = StyleSheet.create({
    imagemPerfil : {
        width : 60,
        height : 60,
        borderRadius: 30,
        marginTop: 15,
        marginLeft: 5
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
        fontSize: 15,
        fontWeight: 'bold'
    }

})

export default Estilo;