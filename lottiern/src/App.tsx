import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Lottie from 'lottie-react-native';

import rocketseatLottie from './assets/rocketseat.json';

const App: React.FC = () => {
  const lottieRef = useRef<Lottie>(null);
  const [animationState, setAnimationState] = useState(true);

  function toggleAnimationState() {
    !animationState ? lottieRef.current?.resume() : lottieRef.current?.pause();
    setAnimationState(!animationState);
  }

  function resetAnimation() {
    lottieRef.current?.reset();
    lottieRef.current?.play();
    setAnimationState(true);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.lottieContainer}>
        <Lottie
          ref={lottieRef}
          resizeMode="contain"
          source={rocketseatLottie}
          autoPlay
          loop
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={toggleAnimationState}
          onLongPress={resetAnimation}>
          <Text style={styles.buttonText}>
            {animationState ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lottieContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000f0',
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#000000f0',
  },
  button: {
    backgroundColor: '#222',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default App;
