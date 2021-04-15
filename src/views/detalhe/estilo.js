import {StyleSheet} from "react-native";

const Estilo = StyleSheet.create({
    fotoPerfil : {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    container : {
        flexDirection : "column",
        alignItems: "center",
        marginTop : 30
    },
    nome : {
        marginTop : 10,
        fontSize : 15,
        fontWeight: "bold"
    },
    containerDescricao : {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row'
    }, 
    descricao : {
        marginTop: 15,
        fontSize: 15
    } ,
    negrito: {
        marginTop: 15,
        fontSize: 15,
        fontWeight : "bold"
    },
    imagemCurso: {
        width : 20,
        height : 20,
        borderRadius: 10,
        marginTop: 10,
        
    }
});

export default Estilo;