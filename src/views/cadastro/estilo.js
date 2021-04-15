import {Dimensions, StyleSheet} from 'react-native'
import { COR_BOTOES, COR_DE_FUNDO } from '../../style/style';

const tamanhoDaTela = Dimensions.get('screen').width;

const Estilo = StyleSheet.create({
    
    contentTop: {
        backgroundColor : COR_DE_FUNDO
    },
    input: {
      marginTop: 8,
      marginRight: 8,
      marginLeft: 8,
      //width: tamanhoDaTela,
      height: 25,
      backgroundColor: '#fff',
      fontWeight: 'bold',
      borderRadius: 3,
    },
    botao: {
      marginTop: 50,
     // width: tamanhoDaTela,
      marginRight: 30,
      marginLeft: 30,
      height: 30,
      borderRadius: 3,
      backgroundColor: COR_BOTOES,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoTexto : {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
     
    },
    descricao: {
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 8,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: COR_DE_FUNDO
    }
})

export default Estilo;