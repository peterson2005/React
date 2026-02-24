import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRoutes } from './Routes';


export default function App() {
  return (
    <SafeAreaProvider>
      <AppRoutes />
    </SafeAreaProvider>
  );
}
