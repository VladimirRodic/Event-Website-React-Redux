import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../App.css";

import User from "./User/User";
import UserLogin from "./User/UserLogin";
import Register from "./User/Register";

import EventMain from "./Event/EventMain";
import EventMainLine from "./Event/EventMainLine";
import EventDetail from "./Event/EventDetail";
import EditEvent from "./Event/EditEvent";
import CreateEvent from "./Event/CreateEvent";

import Error from "./Error";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/user" exact component={User} />
          <Route path="/user/login" component={UserLogin} />
          <Route path="/register" component={Register} />

          <Route path="/events" exact component={EventMain} />
          <Route path="/events/line" exact component={EventMainLine} />
          <Route path="/event/:id" component={EventDetail} />
          <Route path="/event/edit/:id" component={EditEvent} />
          <Route path="/event/create" component={CreateEvent} />

          <Route path="/error" component={Error} />
          <Route path="/404" component={Error} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
