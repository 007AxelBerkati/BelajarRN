import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Masuk ke List Component"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Masuk ke Component Screen"
        onPress={() => navigation.navigate("Component")}
      />
      <Button
        title="Masuk ke Image Screen"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="Masuk ke Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Masuk ke Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
