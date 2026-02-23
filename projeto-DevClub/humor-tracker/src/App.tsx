import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // Adicionei o SafeAreaProvider
import { MyButton } from "./shared/components/MyButton";
import { Text, StyleSheet, Pressable } from 'react-native';

export default function App() {
  return (
    /* 1. O Provider deve envolver toda a aplicação */
    <SafeAreaProvider>
      {/* 2. O SafeAreaView agora vai funcionar corretamente */}
      <SafeAreaView style={styles.container}>


      <Pressable style={styles.button}>        
        <Text>Press me</Text>
      </Pressable>
        

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Adicionei um estilo básico para garantir que o app ocupe a tela toda
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 100, 
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  }
  },
);