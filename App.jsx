import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
  //  import { tw } from 'nativewind';
export default function App() {
  // highlight-next-line
  const width = useSharedValue(100);

  const handlePress = () => {
    // highlight-next-line
    width.value += 50;
  };

  return (
    <View style={styles.container} className="bg-black">
      <Animated.View
        style={Object.assign(Object.assign({}, styles.box), { width })}
      />
<Text className="text-white text-lg font-bold">Hello, Tailwind!</Text>

      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
});
