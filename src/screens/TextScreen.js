import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function TextScreen() {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text>Masukan password</Text>
        <TextInput
          placeholder="Nama Lengkap anda"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 5 ? (
          <Text>
            Password mu kurang dari 5, tolong isi password mu minimal 5
            character
          </Text>
        ) : null}
      </View>
      <View>
        <Text>Nama saya adalah : {password}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,

    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});
