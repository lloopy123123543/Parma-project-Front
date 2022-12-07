import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo"></div>
        <div className="row">
          <div className="col">Главная</div>
          <div className="col">О нас</div>
          <div className="col">Контакты</div>
        </div>
      </div>
    );
  }
}