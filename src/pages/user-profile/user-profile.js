import React from "react";
import UserHeaderProfile from "../../components/UserHeaderProfile";
import UserMenu from "../../components/UserMenu";
import "../pages/global.css";
import "./user-profile.css";

import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="container">
        <UserHeaderProfile />
        <UserMenu />
      </div>
    );
  }
}
