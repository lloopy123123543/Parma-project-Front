import React from "react";
import AdminHeaderProfile from "../../components/AdminHeaderProfile";
import AdminMenu from "../../components/AdminMenu";
import "../pages/global.css";
import "./admin-profile.css";

import React, { Component } from 'react'

export default class AdminProfile extends Component {
  render() {
    return (
      <div className="container">
        <AdminHeaderProfile/>
        <AdminMenu/>
      </div>
    )
  }
}