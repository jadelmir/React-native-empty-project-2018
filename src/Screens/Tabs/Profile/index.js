import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import ProfileList from "cmp/list/ProfileList";
class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ProfileList />
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
)(Profile);
