import { Alert } from "react-native";
import {firestoreDb} from './firebaseDb';

export function cadastrarPessoa(pessoa)
{
    if(pessoa.nome === '')
    {
     alert('Preencha todos os campos')
    } 
    else 
    {   
        Alert.alert('Pessoa : ', pessoa.nome)
       try
        {
            
            firestoreDb.collection("users").add({
                first: "Alan",
                middle: "Mathison",
                last: "Turing",
                born: 1912
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            
            
        }
        catch(exception)
        {
            Alert.alert("Ops! Algo aconteceu", exception.message);
        }  
        return true;
    }
}

export async function listarPessoas()
{
    
    try
    {   /*
        var lista = []
        const snapshot = await pessoaFirebase.get('pessoas/')
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
        */
       return [];
    }
    catch(exception)
    {
        Alert.alert("Ops! Algo aconteceu", exception.message);
    }
}
