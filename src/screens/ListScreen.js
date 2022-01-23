import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ListScreen() {
  const friends = [
    { name: "Friends #1", age: 20 },
    { name: "Friends #2", age: 30 },
    { name: "Friends #3", age: 40 },
    { name: "Friends #4", age: 50 },
    { name: "Friends #5", age: 60 },
    { name: "Friends #6", age: 70 },
    { name: "Friends #7", age: 80 },
    { name: "Friends #8", age: 90 },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    marginHorizontal: 40,
  },
});
