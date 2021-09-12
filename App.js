import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  function onStart() {
    alert("计时开始！");
  }

  return (
    <View style={styles.container}>
      <Text>等间隔报时器</Text>
      <Button onPress={onStart} title="开始"/>
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
