import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BoxScreenExercise() {
  return (
    <View style={styles.container}>
      <View style={styles.viewStyle1} />
      <View style={styles.viewStyle2} />
      <View style={styles.viewStyle3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    margin: 20,
    borderRadius: 10,
    borderColor: "black",
  },

  viewStyle1: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  viewStyle2: {
    backgroundColor: "blue",
    height: 100,
    position: "absolute",
    alignSelf: "flex-end",
    width: 100,
  },
  viewStyle3: {
    backgroundColor: "yellow",
    height: 100,
    width: 100,
    alignSelf: "center",
  },
});
