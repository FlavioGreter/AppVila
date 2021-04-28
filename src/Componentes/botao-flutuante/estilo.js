import {StyleSheet} from 'react-native';
import { COR_DE_FUNDO } from '../../style/style';

const Estilo = StyleSheet.create({
    botaoAdicionar: {
        backgroundColor: COR_DE_FUNDO,
        width : 55,
        height : 55,
        borderRadius : 60,
        marginBottom: 50,
       // marginRight : 40

        
    },
    subBotoes: {
        marginBottom: 40,
        marginRight : 40,
        color : 'red'
    }
});

export default Estilo;