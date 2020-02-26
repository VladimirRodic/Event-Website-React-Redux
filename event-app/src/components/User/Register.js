import React, { Component } from "react";
//import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Input from "../Input";
import Button from "../Button";
/*
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
*/
class Register extends Component {
  render() {
    return (
      <div>
        <h1>RegisterUserComponent</h1>
        <div>
          <Sidebar />
        </div>
        <div>
          <Menu page="register" />
          <b>Get started absolutely free.</b>
          <br />
          Enter your details below.
          <Input text="First name" />
          <Input text="Last name" />
          <Input text="Email" />
          <Input text="Password" type="password" />
          <Input text="Repeat password" type="password" />
          <Button text="SIGN UP" color="green" />
        </div>
      </div>
    );
  }
}

export default Register; //connect(mapStateToProps)(Register);
