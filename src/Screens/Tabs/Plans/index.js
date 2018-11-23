import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import Calendar from "./calendar";
import HeaderRight from "./Header/HeaderRight";
import ITEMS from "cmp/list/nativeBaseListItem";
import { addPlan, onItemPress } from "./actions";
class Plan extends Component {
  static navigationOptions = {
    title: "Plans",
    headerRight: <HeaderRight />
  };

  render() {
    const { markedDates, data, onItemPress } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Calendar markedDates={markedDates} />
        <ITEMS data={data} onItemPress={onItemPress} />
      </View>
    );
  }
}
const mapStateToProps = ({ PlanRed }) => {
  const { markedDates, data } = PlanRed;
  return { markedDates, data };
};
export default connect(
  mapStateToProps,
  { addPlan, onItemPress }
)(Plan);
