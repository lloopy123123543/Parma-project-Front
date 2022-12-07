import React from "react";
import "./login/login.css";
import "../pages/global.css";

const Login = () => {
  return (
    <body>
      <div className="container">
        <div className="login-block">
          <div className="login-title">Добро пожаловать</div>
          <div className="login-inputs">
            <input type={"text"} placeholder="Логин" />
            <input type="text" placeholder="Пароль" />
          </div>
          <button>Войти</button>
        </div>
      </div>
    </body>
  );
};

export default Login;
