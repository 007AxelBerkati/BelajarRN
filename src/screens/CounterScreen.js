import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Directions } from "react-native-gesture-handler";

export default function CounterScreen() {
  const [Counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Increase"
          onPress={() => {
            setCounter(Counter + 1);
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            setCounter(Counter - 1);
          }}
        />
      </View>
      <View style={{ paddingTop: 30, alignItems: "center" }}>
        <Text style={styles.title}> Current Count - {Counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },

  title: {
    fontSize: 30,
  },
});
