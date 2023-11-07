import * as React from 'react';
import { Button, Text } from 'react-native';
import InputText from './components/Inputs';
import { Box } from 'native-base';
import icon from '../assets/pana.png';
import ButtonCx from './components/ButtonCx';

export default function Login({ navigation }) {
    return (
      <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ color:'#790FFF', fontFamily: 'Roboto-Regular', marginBottom: 10,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal' }}>Acesse sua conta!</Text>
        <InputText ph="E-mail" />
        <InputText ph="Senha" />
        <Box style={{ marginBottom: 50 }}>
          <Button title="Acessar" onPress={() => navigation.navigate("Zelle")} />
        </Box>
        <img src={icon} style={{ marginBottom: 10 }} />
        <p>Não tenho uma conta. <a style={{ color:'#790FFF', fontFamily: 'Roboto-Regular', marginBottom: 10,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal' }}>Toque para criar uma agora.</a></p>
      </Box>
    );
}