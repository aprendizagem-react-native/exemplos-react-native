import React, { useState } from 'react';
import { View } from 'react-native';

import Calculadora from './apps/Calculadora';
import Estilos from './apps/Estilos';
import Pokemon from './apps/Pokemon';
import Imagens from './apps/Imagens';
import RolagemVertical from './apps/RolagemVertical';
import Listagem from './apps/Listagem';
import Login from './apps/Login';
import Contador from './apps/Contador';
import Padrao from './apps/Padrao';

const App = () => {
    return (
        <View>
            {/* <Padrao />    */}
            {/* <Contador /> */}
            {/* <Login /> */}
            {/* <Listagem /> */}
            {/* <RolagemVertical /> */}
            {/* <Imagens /> */}
            {/* <Pokemon /> */}
            {/* <Estilos /> */}
            <Calculadora />
        </View>
    );
};

export default App;
