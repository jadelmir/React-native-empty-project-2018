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
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this)}
        placeholder={placeholder || "Select a server"}
      >
        <Picker.Item label="BMW" value="1" />
        <Picker.Item label="Mercedes" value="2" />
        <Picker.Item label="cherokee" value="3" />
        <Picker.Item label="hyundai" value="4" />
        <Picker.Item label="subaru" value="5" />
      </Picker>
    );
  }
}
