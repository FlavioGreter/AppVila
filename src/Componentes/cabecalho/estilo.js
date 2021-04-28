
import { StyleSheet} from 'react-native';
import { COR_DE_FUNDO } from '../../style/style';

const estilo = StyleSheet.create({

    logo: {
        width:80,
        height:80,
        marginBottom: 10,
        marginTop : 8
    },
    contentTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        backgroundColor : COR_DE_FUNDO
    },
    menuButton: {
        width: 40,
        height: 40,
        alignItems: 'center'
    },
   

   
})

export default estilo;