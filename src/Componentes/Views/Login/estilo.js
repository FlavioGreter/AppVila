import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
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
      backgroundColor: '#3498db',
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