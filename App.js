import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from './src/Telas';
import mock from './src/mocks/cesta'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
