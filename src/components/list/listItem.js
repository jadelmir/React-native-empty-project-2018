import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const listItems = props => (
  <TouchableOpacity
    onPress={() => props.onItemPress({ name: props.name, id: props.id })}
    style={{
      height: 50,
      justifyContent: "center",
      borderTopWidth: 1,
      width: "100%",
      flex: 1
    }}
  >
    <Text>{props.name}</Text>
  </TouchableOpacity>
);

export default listItems;
