import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import Agenda from "./Agenda";
const items = {
  "2018-11-16": [{ name: "test", height: 50 }],
  "2018-11-17": [{ name: "test", height: 50 }],
  "2018-11-18": [{ name: "test", height: 50 }],
  "2018-11-19": [{ name: "test", height: 50 }],
  "2018-11-20": [{ name: "test", height: 50 }],
  "2018-11-21": [{ name: "test", height: 50 }],
  "2018-11-22": [{ name: "test", height: 50 }],
  "2018-11-23": [{ name: "test", height: 50 }],
  "2018-11-24": [{ name: "test", height: 50 }],
  "2018-11-25": [{ name: "test", height: 50 }],
  "2018-11-26": [{ name: "test", height: 50 }]
};
class Attendance extends Component {
  static navigationOptions = {
    title: "Attendance"
  };
  render() {
    return <Agenda items={items} />;
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Attendance);
