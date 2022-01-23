import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../Component/ImageDetail";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail title="forest" />
      <ImageDetail title="Beach" />
      <ImageDetail title="Mountaion" />
    </View>
  );
}

const styles = StyleSheet.create({});
