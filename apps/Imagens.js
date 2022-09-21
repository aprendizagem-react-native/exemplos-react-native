import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

const Imagens = () => {

    

    return (
        <View>

            <Text> Exibindo imagens: </Text>

            {/*
                O padrão das imagens é ter 100% de width,
                mas é preciso mencionar o tamanho mínimo de altura (height) 
            */}
            {/* Imagem local */}
            <Image
                source={require("./../imagens/senac.png")}
                style = {{ height: "200px" }}
            />

            {/*
                A propriedade resizeMode com "contain" pode ajudar a fazer a imagem se encaixar melhor
            */}
            {/* Imagem da web */}
            <Image
                source ={{uri:'https://i.imgur.com/DTNmYg6.png'}}
                style = {{ width: "100%", height: 100 }}
                resizeMode="contain"
            />
            
        </View>
    );
}

export default Imagens;
