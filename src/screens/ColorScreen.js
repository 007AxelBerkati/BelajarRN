import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function ColorScreen() {
  const [Color, setColor] = useState([]);
  console.log(Color);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColor([...Color, randomRGB()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={Color}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 100, height: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
}

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
};

const styles = StyleSheet.create({});
