import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TouchableOpacity,
  View,
  Text,
  TimePickerAndroid,
  DatePickerAndroid,
  DatePickerIOS,
  Platform
} from "react-native";
import { Item, Form } from "native-base";
import moment from "moment";
class DateAndTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datePickerVisivle: false,
      dateChosen:
        Platform.OS === "ios" ? new Date() : moment().format("YYYY-MM-DD")
    };
  }
  get_datePicker() {
    const { onDateChange } = this.props;
    if (Platform.OS === "ios") {
      return (
        <View>
          <DatePickerIOS
            date={this.props.dateChosen}
            onDateChange={onDateChange}
          />
        </View>
      );
    } else {
      this.openAndroidDatePicker();
    }
  }
  showDateTimePicker() {
    this.props.showDateTimePicker(!this.props.timeShow);
  }
  showDatePicker = () => {
    this.setState({
      datePickerVisivle: !this.state.datePickerVisivle
    });
  };
  openAndroidDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: this.props.dateChosen
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        var date = new Date(year, month, day);
        // date = moment(date).format('YYYY-MM-DD');
        // this.setState({
        // 	AndroidDate: date
        // });
        this.setState({ dateChosen: date });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };
  openAndroidTimePicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: true, // Will display '2 PM'
        mode: "spinner"
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        time = { minute, hour };
        this.props.selectTime(time);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  };
  render() {
    return (
      <View>
        {Platform.OS === "ios" ? (
          <Form style={{ height: 40 }}>
            <Item onPress={this.showDatePicker} style={{ height: 40 }}>
              <Text>
                {moment(this.props.dateChosen).format("MMMM Do YYYY, h:mm a")}
              </Text>
            </Item>
          </Form>
        ) : (
          <TouchableOpacity
            onPress={this.showDatePicker}
            // style={styles.textInput}
          >
            <Text>{moment().format("MMMM Do YYYY")}</Text>
          </TouchableOpacity>
        )}
        {/* {Platform.OS === "ios" ? null : (
          <TouchableOpacity
            onPress={this.openAndroidTimePicker()}
            // style={styles.textInput}
          >
            <Text>{moment(this.props.selectedTime).format("h:mm a")}</Text>
          </TouchableOpacity>
        )}; */}
        <View>
          {this.state.datePickerVisivle ? this.get_datePicker() : null}
        </View>
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
)(DateAndTime);
