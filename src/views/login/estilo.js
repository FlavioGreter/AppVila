import {StyleSheet} from 'react-native'
import { COR_BOTOES, COR_DE_FUNDO } from '../../style/style';

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COR_DE_FUNDO
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 10
    },
    input: {
      marginTop: 10,
      width: 300,
      backgroundColor: '#fff',
      fontWeight: 'bold',
      borderRadius: 3
    },
    botao: {
      marginTop: 10,
      width: 200,
      height: 42,
      backgroundColor: COR_BOTOES,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoTexto : {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    }
})

export default estilo;