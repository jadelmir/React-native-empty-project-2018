import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import ListItems from "cmp/list/listItem";
class Items extends Component {
  _keyExtractor = (item, index) => item.id;
  render() {
    const { servers, onItemPress } = this.props;
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <FlatList
          style={{ flex: 1 }}
          data={servers}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <ListItems
              name={item.name}
              id={item.id}
              onItemPress={onItemPress}
            />
          )}
        />
      </View>
    );
  }
}

export default Items;
