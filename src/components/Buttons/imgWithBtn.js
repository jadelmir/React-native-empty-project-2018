import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Text, Icon } from "native-base";
const Outline = props => (
  <Button bordered dark onPress={props.onPress} style={styles.Button}>
    <Text>{props.name}</Text>
    <Image source={props.image} style={styles.img} resizeMode="contain" />
  </Button>
);

export default Outline;

const styles = StyleSheet.create({
  Button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    height: 20
  }
});
