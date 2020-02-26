import React from "react";
import Input from "../Input";
import Button from "../Button";
import InfoErrorMessage from "../InfoErrorMessage";

class Login extends React.Component {
  render() {
    return (
      <div>
        <b>Sign in to Eventio.</b>
        <InfoErrorMessage
          infoMessage="Enter your details below."
          errorMessage="Oops! Tham email and password combination is not valid"
        />
        <Input text="Email" />
        <Input text="Password" type="password" />
        <Button text="SIGN IN" color="green" />
      </div>
    );
  }
}

export default Login;
