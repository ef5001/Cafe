import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

export default function SplashScreen({ onFinish }) {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1200),
    ]).start(() => onFinish?.());
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoWrapper,
          { opacity: logoOpacity, transform: [{ scale: logoScale }] },
        ]}
      >
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
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
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 260,
    height: 260,
  },
});
