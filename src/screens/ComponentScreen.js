import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ComponentScreen() {
  const name = "Axel Berkati";
  return (
    <View>
      <Text style={styles.title}>
        Selamat datang dan selamat belajar React Native
      </Text>
      <Text style={styles.name}>Halo Nama saya {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },

  name: {
    fontSize: 25,
  },
});
