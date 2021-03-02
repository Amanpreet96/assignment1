import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const textHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.inputField}
        placeholder="add todo..."
        onChangeText={textHandler}
      />
      <Button onPress={() => submitHandler(text)} title="Add" color="coral" />
    </View>
  );
}
const styles = StyleSheet.create({
  inputField: {
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
