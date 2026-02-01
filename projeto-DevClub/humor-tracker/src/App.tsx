
import { SafeAreaView } from 'react-native-safe-area-context';

import { MyButton } from "./shared/components/MyButton";
import { Text } from 'react-native';

export default function App() {
  return (<SafeAreaView>

    <MyButton order={1} onPress={() => console.log('Teste')}>
      <Text>MyButon {1} </Text>
    </MyButton>
    
    <MyButton order={2} onPress={() => console.log('Teste')}>
      <Text>MyButon {2} </Text>
    </MyButton>
    
    <MyButton order={3} onPress={() => console.log('Teste')}>
      <Text>MyButon {3} </Text>
    </MyButton>

    <MyButton order={4} onPress={() => console.log('Teste')}>
      <Text>MyButon {4} </Text>
    </MyButton>


  </SafeAreaView>
  );
}

