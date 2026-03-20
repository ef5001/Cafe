import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen({ onFinish }) {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.sequence([
      // Fade + scale in the logo
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
      // Short pause, then fade in tagline
      Animated.delay(300),
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      // Hold, then finish
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

      <Animated.Text style={[styles.tagline, { opacity: taglineOpacity }]}>
        Coffee. Games. Community.
      </Animated.Text>

      <Text style={styles.location}>Altavista, VA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140e06',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 260,
    height: 260,
  },
  tagline: {
    marginTop: 24,
    fontSize: 14,
    color: '#a8916a',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  location: {
    marginTop: 8,
    fontSize: 12,
    color: '#4a3218',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
