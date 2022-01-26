import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BoxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOneStyle}>Text 1</Text>
      <Text style={styles.textTwoStyle}>Text 2</Text>
      <Text style={styles.textThreeStyle}>Text 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    margin: 20,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  textOneStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: "red",
    top: 10,
    left: 20,
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
    alignSelf: "center",
    position: "absolute",
    ...StyleSheet.absoluteFillObject, // style agar memenuhi object parent dengan dirinya sendiri
  },
});
