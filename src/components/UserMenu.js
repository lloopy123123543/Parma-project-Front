import React, { Component } from "react";

export default class UserMenu extends Component {
  render() {
    return (
      <div className="gov_menu">
        <div className="podraz_results">
          <div className="podraz_info">
            <div className="podraz_title">Результаты подразделений</div>
            <ol>
              <li className="podraz_color_1">
                <span className="podraz_name">Название отдела</span>
              </li>
              <li className="podraz_color_2">
                <span className="podraz_name">Название отдела</span>
              </li>
              <li className="podraz_color_3">
                <span className="podraz_name">Название отдела</span>
              </li>
              <li className="podraz_color_4">
                <span className="podraz_name">Название отдела</span>
              </li>
            </ol>
          </div>
          <div className="podraz_diagrama">
            <div className="diagrama"></div>
          </div>
        </div>
        <div className="tasks">
          <div className="tasks_title">Задания</div>
          <div className="tasks_row">
            <div className="tasks_col">Название</div>
            <div className="tasks_col">Вопросы</div>
          </div>
          <div className="tests">
            <div className="test">
              <div className="test_name">
                <div className="test_title">Тест 2</div>
                <div className="test_subtitle">Описание теста</div>
              </div>
              <div className="test_value">30</div>
              <div className="test_go"></div>
            </div>
          </div>
        </div>

        <div className="results">
          <div className="results_name">Результаты</div>
          <div className="results_row">
            <div className="results_col">Дата</div>
            <div className="results_col">Название</div>
            <div className="results_col">Вопросы</div>
            <div className="results_col">Ответы</div>
          </div>
          <div className="result">
            <div className="result_col_data">20.11.22</div>
            <div className="result_col">
              <div className="result_col_name">Тест 1</div>
              <div className="result_col_subtitle">Описание теста</div>
            </div>
            <div className="result_col_questions">30</div>
            <div className="result_col_answers">29</div>
          </div>
        </div>
      </div>
    );
  }
}
