import React, { Component } from "react";

export default class TestInput extends Component {
  render() {
    return (
      <div>
        <div className="test_name">
          <input className="test_name_input" placeholder="Название теста" />
        </div>
        <div className="test_description">
          <input
            className="test_description_input"
            placeholder="Описание теста"
          />
        </div>
        <div className="question_num">
          <button className="question_button">1</button>
          <button className="question_add">+</button>
        </div>
      </div>
    );
  }
}
