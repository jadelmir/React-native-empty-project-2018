import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";
import { Image } from "react-native";
export default class ListThumbnailExample extends Component {
  render() {
    const { name, Img, id, onItemPress } = this.props;
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={Img} />
        </Left>
        <Body>
          <Text>{name}</Text>
          <Text note numberOfLines={1}>
            Its time to build a difference . .
          </Text>
        </Body>
        <Right>
          <Button transparent onPress={() => onItemPress(id)}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
