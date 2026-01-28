import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Não acredito Hello world!</Text>
      
      <Button
        title={`Counter ${counter}`}
        onPress={() => setCounter(counter + 1)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justify: 'center',
  },
});