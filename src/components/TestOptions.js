import React, { Component } from "react";

export default class TestOptions extends Component {
  render() {
    return (
      <div className="options">
        <div className="question_name">
          <div className="question_name_text">Название задания</div>
          <input className="question_name_input" />
        </div>
        <div className="question_description">
          <div className="question_description_text">Описание задания</div>
          <input className="question_description_input" />
        </div>

        <div className="answer">
          <div className="answer_text">Ответ 1</div>
          <input className="answer_input" />
        </div>
        <div className="answer">
          <div className="answer_text">Ответ 2</div>
          <input className="answer_input" />
        </div>
        <div className="answer">
          <div className="answer_text">Ответ 3</div>
          <input className="answer_input" />
        </div>
        <div className="right_answer">
          <div className="right_answer_text">Правильный ответ</div>
          <div className="answer_list">
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="question_accept_button">
          <button className="accept_button">Готово</button>
        </div>
      </div>
    );
  }
}
