import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [showingSplash, setShowingSplash] = useState(true);

  if (showingSplash) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen onFinish={() => setShowingSplash(false)} />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>Home screen coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140e06',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#e8d5b0',
  },
});
