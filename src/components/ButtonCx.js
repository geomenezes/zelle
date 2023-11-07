import { Button, Box } from 'react-native';

function ButtonCx({ path, title, navigation }) {
  return (
    <Box alignItems="center" style={{ marginBottom: 10 }} >
      <Button title={title} onPress={() => navigation.navigate(path)}/>
      {/* <Button 
      title={title}
      onPress={() => navigation.navigate(path)}
      style={{ backgroundColor: '#790FFF', borderRadius: '31px' }} 
      /> */}
    </Box>
  );
}

export default ButtonCx;