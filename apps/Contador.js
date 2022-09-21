import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Contador = () => {

    const [ contador, alteraContador ] = useState(0);

    const atualizaContador = ( somar ) => {
        const valor = somar ? 1 : -1;
        alteraContador( contador + valor );
    }

    return (
        <View>
            <Text style={estilo.texto} >
                Número do contador: 
                <Text style={estilo.numero}> { contador } </Text>
            </Text>

            <Button 
                // Botões não recebem quase nada de estilo
                // Usar o componente TouchableOpacity para mais liberdade
                title='Adicionar'
                onPress={ () => atualizaContador(true) } 
            />
            <Button
                title='Diminuir'
                foreColor="pink"
                color="red" // Única forma de alterar o fundo de um botão
                onPress={ () => atualizaContador(false) } 
            />
        </View>
    );
}

const estilo = StyleSheet.create({
    texto: {
        color: "red",
        marginTop: 15,
        padding: 15,
        fontSize: 15
    },
    numero: {
        fontSize: 50
    }
})

export default Contador;
