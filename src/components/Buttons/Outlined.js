import React from "react";
import { Button, Text, Icon } from "native-base";
import { StyleSheet } from "react-native";
const Outline = props => (
  <Button bordered dark onPress={props.onPress} style={styles.Button}>
    <Text>{props.name}</Text>
  </Button>
);

export default Outline;

const styles = StyleSheet.create({
  Button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
