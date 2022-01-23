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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
