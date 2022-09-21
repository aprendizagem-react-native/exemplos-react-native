import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';


const Listagem = () => {

    const produtos = [
        {
            id: 0,
            nome: "Arroz",
            preco: 15.90
        },
        {
            id: 1,
            nome: "Feijão",
            preco: 7.80
        },
        {
            id: 2,
            nome: "Batata",
            preco: 1.90
        }
    ]

    return (
        <View>
            <Text> Lista de produtos, toque para ver o preço: </Text>
            
            {
                produtos.map( p =>
                    <Button
                        key={ p.id }
                        title={ p.nome }
                        onPress={ () => alert( p.preco ) }
                    /> 
                )
            }

        </View>
    );
}

export default Listagem;
