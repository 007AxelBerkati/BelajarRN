import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Gap from "./Gap";

export default function ColorCounter({ title, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{title}</Text>
      <Button
        title={`More ${title}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Less ${title}`}
        onPress={() => {
          onDecrease();
        }}
      />
      <Gap height={20} />
    </View>
  );
}

const styles = StyleSheet.create({});
