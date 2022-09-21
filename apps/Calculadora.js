import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';

const Calculadora = () => {

    return (
        <View>

            <Text> Calculadora para treinar o Flex </Text>

            <View style={estilo.container} >

                <View style={estilo.fileira} >

                    <View>
                        <View style={estilo.fileira} >
                            <Botao texto="1" />
                            <Botao texto="2" />
                            <Botao texto="3" />
                        </View>
                        <View style={estilo.fileira} >
                            <Botao texto="4" />
                            <Botao texto="5" />
                            <Botao texto="6" />
                        </View>
                        <View style={estilo.fileira} >
                            <Botao texto="7" />
                            <Botao texto="8" />
                            <Botao texto="9" />
                        </View>
                    </View>
                    
                    <View style={estilo.coluna} >
                        <Botao texto="C" />
                        <Botao texto="=" />
                        <Botao texto="0" />
                    </View>

                </View>

            </View>
            
        </View>
    );
}

const largura = Dimensions.get('window').width;
const estilo = StyleSheet.create({
    container: {
      backgroundColor: "#F5F5F5"
    },
    fileira: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    coluna: {
        flexDirection: "column"
    }
})

const Botao = ( {texto} ) => {

    const estilo = StyleSheet.create({
        botao: {
            alignSelf: "stretch", // Como isso funciona?
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
            margin: 15
        },
        texto:{
            color: "#FFF"
        }
    })

    return(
        <TouchableOpacity style={estilo.botao} >
            <Text style={estilo.texto} > {texto} </Text>
        </TouchableOpacity>
    )
}

export default Calculadora;
