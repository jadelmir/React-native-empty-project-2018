import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import {
  Content,
  Container,
  List,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Right,
  ListItem
} from "native-base";
import LIST from "../list/simpleList";
class PickerModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }
  render() {
    const { selectedName, placeholder, clients, onPressItem } = this.props;
    const { modalVisible } = this.state;
    return (
      <View>
        <ListItem
          onPress={() => this.setState({ modalVisible: !modalVisible })}
        >
          <Body>
            <Text>{selectedName || placeholder || "PICKER"}</Text>
          </Body>
        </ListItem>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => this.setState({ modalVisible: !modalVisible })}
                >
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Select One</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <List>
                <LIST
                  onPressItem={item => {
                    onPressItem(item);
                    this.setState({ modalVisible: !modalVisible });
                  }}
                  data={clients}
                />
              </List>
            </Content>
          </Container>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(PickerModal);
