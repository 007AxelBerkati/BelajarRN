import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../Component/ColorCounter";

const reducer = (state, action) => {
  // state ==={ Red : number , Green : number, Blue : number}
  // action === {type : "change_Red" || "change_Green" || "change_Blue" , payload : 15 || -15 }
  switch (action.type) {
    case "change_Red":
      return state.Red + action.payload > 255 || state.Red + action.payload < 0
        ? state
        : { ...state, Red: state.Red + action.payload };
    case "change_Blue":
      return state.Blue + action.payload > 255 ||
        state.Blue + action.payload < 0
        ? state
        : { ...state, Blue: state.Blue + action.payload };
    case "change_Green":
      return state.Green + action.payload > 255 ||
        state.Green + action.payload < 0
        ? state
        : { ...state, Green: state.Green + action.payload };

    default:
      return state;
  }
};

export default function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { Red: 0, Blue: 0, Green: 0 });
  const COLOR_INCREMENT = 15;
  return (
    <View style={styles.container}>
      <ColorCounter
        title="Red"
        onIncrease={() =>
          dispatch({ type: "change_Red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_Red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title="Blue"
        onIncrease={() =>
          dispatch({ type: "change_Blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_Blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title="Green"
        onIncrease={() =>
          dispatch({ type: "change_Green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_Green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${state.Red}, ${state.Green}, ${state.Blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
