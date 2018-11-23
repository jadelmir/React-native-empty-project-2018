import React, { Component } from "react";
import { Modal, View } from "react-native";
import OutlinedBtn from "cmp/Buttons/Outlined";
import Items from "./Items";
class ServerModal extends Component {
  render() {
    const { visible, ToggleServersModal, servers, onItemPress } = this.props;
    return (
      <Modal animationType="slide" transparent={false} visible={visible}>
        {/* <View>{this._getAllservers()}</View> */}
        <Items servers={servers} onItemPress={onItemPress} />
        <View style={{ flex: 1 }}>
          <OutlinedBtn name={"Close"} onPress={ToggleServersModal} />
        </View>
      </Modal>
    );
  }
}

export default ServerModal;
