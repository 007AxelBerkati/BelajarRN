import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../Component/ImageDetail";
import { GBeach, GForest, GMountain } from "../../assets";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail title="forest" imageSource={GBeach} score={10} />
      <ImageDetail title="Beach" imageSource={GForest} score={10} />
      <ImageDetail title="Mountaion" imageSource={GMountain} score={10} />
    </View>
  );
}

const styles = StyleSheet.create({});
