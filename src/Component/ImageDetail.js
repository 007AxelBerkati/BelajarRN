import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GBeach } from "../../assets";

export default function ImageDetail({ imageSource, title, score }) {
  return (
    <View style={styles.content}>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    // borderWidth: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",
    // padding: 20,
  },
});
