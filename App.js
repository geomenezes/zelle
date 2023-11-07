import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box, Text, Button } from 'native-base';
import Login from './src/Login'
import Zelle from './src/Zelle'
import Group from './assets/Group.svg'
import ButtonCx from "./src/components/ButtonCx";

function HomeScreen({ navigation }) {
  return (
    <Box flex={1} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
    backgroundImage: 'linear-gradient(#6A10DC, #A96BF9)' }}>
      <Text style={{ color:'#fff', fontFamily: 'Italianno', 
        fontSize: '100px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal' }}>
        Zelle
      </Text>
      <img src={Group} />
      <Box style={{ marginTop: 50 }}>
      <Button onPress={() => navigation.navigate("Login")}>Entrar</Button>
       {/* <ButtonCx
        title="Entrar"
        navigation={navigation}
        path="Login"
      />  */}
      </Box>
    </Box>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Zelle" component={Zelle} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
export default App;

