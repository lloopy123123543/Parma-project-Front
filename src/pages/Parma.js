import React, { Component } from "react";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Info from "../components/Info";
import Main from "../components/Main";
import "./global.css";
import "./Parma.css";

export default class Parma extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Main/>
        <Info/>
        <Contacts/>
      </div>
    );
  }
}
