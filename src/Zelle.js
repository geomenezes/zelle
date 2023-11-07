import { Box, Button, View, Text, Alert, VStack, HStack, IconButton, CloseIcon, Collapse } from 'native-base';
import * as React from 'react';
import { useState } from 'react';
import InputText from './components/Inputs';

export default function Zelle({ navigation }) {

  const [option, setOption] = useState(1);
  const [alert, setAlert] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Box style={{ backgroundColor: '#790FFF', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <Text style={{ color:'#fff', fontFamily: 'Italianno', 
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal' }}>
        Zelle
      </Text>
      <Button.Group isAttached colorScheme="blue" mx={{
        base: "auto",
        md: 0,
        margin: 10
      }} size="sm">
        <Button onPress={() => setOption(1)} variant={option === 2 ? "outline" : "solid"}>Horários</Button>
        <Button onPress={() => setOption(2)} variant={option === 1 ? "outline" : "solid"}>Trajeto</Button>
      </Button.Group>
      </Box>
      {option === 1 ? 
        <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <InputText ph="00:00" />
          <p>Horario de saída</p>
          <InputText ph="00:00" />
          <p>Horário de chegada</p>
        </Box>
      :
      <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <p>Digite o local de partida:</p>
        <InputText ph="Partida" />
        <p>Digite o local de destino:</p>
        <InputText ph="Destino" />
      </Box>
      }
      <Button onPress={() => setAlert(true)}>Salvar</Button>

      <Collapse isOpen={alert}>
        <Alert maxW="400" status="success" colorScheme="success">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  Informações salvas!
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" />} _icon={{
              color: "coolGray.600"
            }} onPress={() => setAlert(false)} />
            </HStack>
          </VStack>
        </Alert>
      </Collapse>

    </View>
  );
}