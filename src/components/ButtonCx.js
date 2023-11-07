import { Button } from 'react-native';

function ButtonCx({ path, title, navigation }) {
  return (
    <Button title={title} onPress={() => navigation.navigate(path)}/>
  );
}

export default ButtonCx;
