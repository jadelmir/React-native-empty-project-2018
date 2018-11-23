import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    const { markedDates } = this.props;

    return (
      <Calendar
        onDayPress={this.onDayPress}
        style={styles.calendar}
        hideExtraDays
        markedDates={{
          ...markedDates,
          [this.state.selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange"
          }
        }}
      />
    );
  }

  onDayPress(day) {
    console.log("day selected", day);
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 350
  },
  text: {
    textAlign: "center",
    borderColor: "#bbb",
    padding: 10,
    backgroundColor: "#eee"
  },
  container: {
    flex: 1,
    backgroundColor: "gray"
  }
});
