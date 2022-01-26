import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import Gap from "../Component/Gap";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Masuk ke List Component"
        onPress={() => navigation.navigate("List")}
      />
      <Gap height={20} width={20} />
      <Button
        title="Masuk ke Component Screen"
        onPress={() => navigation.navigate("Component")}
      />
      <Gap height={20} width={20} />
      <Button
        title="Masuk ke Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Gap height={20} width={20} />

      <Button
        title="Masuk ke Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Gap height={20} width={20} />
      <Button
        title="Masuk ke Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Gap height={20} width={20} />
      <Button
        title="Masuk ke Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Gap height={20} width={20} />
      <Button
        title="Masuk ke Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Gap height={20} width={20} />
      <Button
        title="Masuk ke Box Screen"
        onPress={() => navigation.navigate("Box")}
      />
      <Gap height={20} width={20} />
      <Button
        title="Masuk ke Box Exercise Screen"
        onPress={() => navigation.navigate("BoxExercise")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  },

  text: {
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
