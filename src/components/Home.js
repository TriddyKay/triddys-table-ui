import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export const Home = () => {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5733',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
