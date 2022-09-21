import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';


const Login = () => {

    const [ email, alteraEmail ] = useState("");
    const [ senha, alteraSenha ] = useState("");

    const autentica = ( email, senha ) => {
        alert("Email: " + email + "\nSenha: " + senha);
    }

    return (
        <View>
            <Text> Tela de login </Text>
            <TextInput 
                placeholder="Digite o E-mail..."
                onChangeText={ texto => alteraEmail(texto) } 
            />
            <TextInput
                placeholder='Digite a senha...'
                onChangeText={ texto => alteraSenha(texto) } 
            />
            <Button
                title="Enviar"
                onPress={ () => autentica(email, senha) }
            />

            {/* 
            
            Não funciona no React Native para Web

            <TouchableOpacity
                onPress={onPress}
            >
                <Text>Press Here</Text>
            </TouchableOpacity> 
            */}

        </View>
    );
}

export default Login;
