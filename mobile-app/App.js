import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';

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
    <>
      <StatusBar style="light" />
      <HomeScreen />
    </>
  );
}
