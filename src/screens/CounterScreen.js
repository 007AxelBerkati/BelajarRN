import React, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const reducer = (state, action) => {
  // state === {count : number}
  // action === {type : "increment" || "decrement", payload : 1}
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Increase"
          onPress={() => {
            dispatch({ type: "increment", payload: 1 });
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            dispatch({ type: "decrement", payload: 1 });
          }}
        />
      </View>
      <View style={{ paddingTop: 30, alignItems: "center" }}>
        <Text style={styles.title}> Current Count - {state.count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },

  title: {
    fontSize: 30,
  },
});
