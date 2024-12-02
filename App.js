import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text style={{ fontWeight: 'bold' }}>
        Textをネストさせることで
        <Text style={{ color: 'red' }}>インラインスタイル</Text>
        を適用できます
      </Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 64, height: 64}}
      />
      <Image
        source={require('./assets/favicon.png')}
        style={{ width: 48, height: 48 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
