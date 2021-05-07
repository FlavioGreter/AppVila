import { Alert } from "react-native";
import firestore from '@react-native-firebase/firestore';




export async function cadastrarPessoa(pessoa)
{
    if(pessoa.nome === '')
    {
     alert('Preencha todos os campos')
    } 
    else 
    {   
        
       try
        {   
            await firestore().collection('pessoas').add({pessoa})
            .then(() => {
                return true;
            })       
        }
        catch(exception)
        {
            Alert.alert("Ops! Algo aconteceu", exception.message);
        }  
        return false;
    }
}

export async function listarPessoas()
{
    
    try
    {   
        
        var lista = []
        const snapshot = await firestore().collection('pessoas').get()
        const pessoas = snapshot.docs.map(doc => doc.data())

        
        for (var i = 0; i < pessoas.length; i++) {
            lista.push({
                nome     : pessoas[i].nome,
                cpf      : pessoas[i].cpf,
                rua      : pessoas[i].rua,
                numero   : pessoas[i].numero,
                bairro   : pessoas[i].bairro,
                whatsapp : pessoas[i].whatsapp,
                email    : pessoas[i].email 
            });
            
        }
        //Alert.alert('TESTE' , lista[3].nome)
        return(JSON.stringify(lista));
        
      // return [];
    }
    catch(exception)
    {
        Alert.alert("Ops! Algo aconteceu", exception.message);
    }
}
