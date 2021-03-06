import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, FlatList } from "react-native";
import LISTITEMS from "cmp/list/NBClientsList";
import SEARCH from "cmp/Header/NBSearch";
import ActionSheet from "react-native-actionsheet";
import { Container, Content, List } from "native-base";
import PICKER from "cmp/Picker/nativeBasePicker";
import { onSelectChange } from "./actions";
class Clients extends Component {
  showActionSheet = () => {
    // this.ActionSheet.show();
  };
  _keyExtractor = (item, index) => item.id;
  render() {
    const { Clients, onSelectChange } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <SEARCH />
        <Container>
          <PICKER
            onSelectChange={onSelectChange}
            placeholder={"Select a car Type"}
          />
          <Content>
            <List>
              <FlatList
                data={Clients}
                // extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                  <LISTITEMS
                    onItemPress={this.showActionSheet}
                    id={item.id}
                    fullName={item.fullName}
                    location={item.location}
                    speciality={item.speciality}
                    phoneNumber={item.phoneNumber}
                  />
                )}
              />
            </List>
          </Content>
        </Container>
        {/* <LISTITEMS onItemPress={this.showActionSheet} /> */}
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={"Which one do you like ?"}
          options={["View Report", "Edit Client", "Add Plan", "Cancel"]}
          cancelButtonIndex={3}
          destructiveButtonIndex={1}
          onPress={index => {
            /* do something */
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = ({ ClientsRed }) => {
  const { Clients } = ClientsRed;
  return { Clients };
};
export default connect(
  mapStateToProps,
  { onSelectChange }
)(Clients);
