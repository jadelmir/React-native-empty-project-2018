import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import Picker from "cmp/Picker/PickerModal";
import { Container, Form, Input, Item } from "native-base";
import DateAndTime from "cmp/Date/DateAndTime";
import { onDateChange, onSelectChange, onPressItem } from "./actions";
class AddPlan extends Component {
  render() {
    const {
      onDateChange,
      planDate,
      onSelectChange,
      onPressItem,
      clientSelected,
      Clients
    } = this.props;

    return (
      <Container>
        <Form>
          {/* Take As Params key to render the selected Item */}
          <Picker
            placeholder={"Select A Client"}
            onSelectChange={onSelectChange}
            clients={Clients}
            onPressItem={onPressItem}
            clientSelected={clientSelected}
            selectedName={clientSelected ? clientSelected.name : null}
          />

          <DateAndTime dateChosen={planDate} onDateChange={onDateChange} />
          <Item>
            <Input placeholder="Add your comment" />
          </Item>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = ({ AddPlanRed }) => {
  const { planDate, clientSelected, Clients } = AddPlanRed;
  return { planDate, clientSelected, Clients };
};
export default connect(
  mapStateToProps,
  { onDateChange, onSelectChange, onPressItem }
)(AddPlan);
