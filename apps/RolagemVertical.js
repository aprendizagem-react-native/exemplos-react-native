import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

const RolagemVertical = () => {

    const numeros = [];
    const tamanho_array = 50;
    for( let i = 1; i < tamanho_array; i++ ){
        numeros.push( i );
    }

    return (
        <View>

            <Text> Contagem de 1 a {tamanho_array}: </Text>

            {/* O ScrollView só tem alteração visual no mobile, pois na web o scroll é gerado automaticamente */}
            <ScrollView>
                {
                    numeros.map( n => 
                        <Text> { n } </Text>
                    )
                }
            </ScrollView>
            

        </View>
    );
}

export default RolagemVertical;
