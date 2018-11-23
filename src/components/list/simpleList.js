import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Right,
  Body
} from "native-base";
import { FlatList } from "react-native";
export default class ListExample extends Component {
  render() {
    const { data, onPressItem } = this.props;
    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ListItem onPress={() => onPressItem(item)}>
                  <Body>
                    <Text>{item.name}</Text>
                  </Body>
                </ListItem>
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
