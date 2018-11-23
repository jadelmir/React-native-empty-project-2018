import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base";
import { TouchableOpacity } from "react-native";
export default class ListAvatarExample extends Component {
  render() {
    const { onItemPress, fullName, location, speciality } = this.props;
    return (
      <ListItem onPress={onItemPress}>
        <Body>
          <Text>{fullName}</Text>
          <Text note>Based in: {location}</Text>
        </Body>
        <Right>
          <Text note> {speciality}</Text>
        </Right>
      </ListItem>
    );
  }
}
