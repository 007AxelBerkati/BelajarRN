import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../Component/ColorCounter";

export default function SquareScreen() {
  const [Red, setRed] = useState(0);
  const [Blue, setBlue] = useState(0);
  const [Green, setGreen] = useState(0);

  const COLOR_INCREMENT = 15;

  const setColor = (color, change) => {
    switch (color) {
      case "Red":
        Red + change > 255 || Red + change < 0 ? null : setRed(Red + change);
        return;
      case "Blue":
        Blue + change > 255 || Blue + change < 0
          ? null
          : setBlue(Blue + change);
        return;
      case "Green":
        Green + change > 255 || Green + change < 0
          ? null
          : setGreen(Green + change);
        return;
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <ColorCounter
        title="Red"
        onIncrease={() => {
          setColor("Red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("Red", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        title="Blue"
        onIncrease={() => {
          setColor("Blue", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("Blue", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        title="Green"
        onIncrease={() => {
          setColor("Green", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("Green", -1 * COLOR_INCREMENT);
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${Red}, ${Blue}, ${Green})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
