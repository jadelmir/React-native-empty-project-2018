import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { onPressAddPlan } from "../actions";
class HeaderRight extends Component {
  render() {
    const { onPressAddPlan } = this.props;
    return (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={onPressAddPlan}>
        <Icon name="add" />
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  { onPressAddPlan }
)(HeaderRight);
