import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const Pokemon = () => {

    const [ pokemons, alteraPokemons ] = useState([]);

    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then( resposta => {
            console.log(resposta.data)
            alteraPokemons( resposta.data.results );
        })
        .catch( resposta => console.log(resposta) )
    }, []);

    return (
        <View>
            
            <Text> Listagem de Pokémons </Text>
    
            <ScrollView>
            {
                pokemons == 0 ? <Text> Carregando... </Text> :
                
                pokemons.map( p => 
                    <View key={p.id} >
                        <Text> { p.name } </Text>
                    </View>
                )

            }
            </ScrollView>

        </View>
    );
}

export default Pokemon;
