import React from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Login from "./Login";

class UserLogin extends React.Component {
  render() {
    return (
      <div>
        <h1>UserLoginComponent</h1>
        <div>
          <Sidebar />
        </div>
        <div>
          <Menu page="login" />
          <Login />
        </div>
      </div>
    );
  }
}

export default UserLogin;
