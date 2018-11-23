import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon
} from "native-base";

const InputForm = props => (
  <Form>
    <Item floatingLabel error={props.error}>
      <Label>{props.placeholder}</Label>
      <Input onChangeText={props.onChange} />
      {props.error ? <Icon name="close-circle" /> : null}
    </Item>
  </Form>
);

export default InputForm;
