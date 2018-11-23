import React, { Component } from "react";
import { Container, Header, Content, Picker, Form } from "native-base";
export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
    this.props.onSelectChange(value);
  }
  render() {
    const { placeholder } = this.props;
    return (
      <Picker
        note
        mode="dropdown"
        style={{ width: "100%" }}
        selectedValue={this.state.selected || "Select a server"}
        onValueChange={this.onValueChange.bind(this)}
        placeholder={placeholder || "Select a server"}
      >
        <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
        <Picker.Item label="Net Banking" value="key4" />
      </Picker>
    );
  }
}
