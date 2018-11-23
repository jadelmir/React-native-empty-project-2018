import React from "react";
import { TextInput, View, Text, Image } from "react-native";
import EmailIMG from "assets/Forms/email.png";
const InputForm = props => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      padding: 20
    }}
  >
    <View>
      <Image source={props.img} style={{ height: 20 }} resizeMode="contain" />
    </View>
    <View>
      <TextInput
        onChange={props.onChange}
        placeholder={props.placeholder}
        style={{ width: "100%", height: 20 }}
      />
    </View>
  </View>
);

export default InputForm;
