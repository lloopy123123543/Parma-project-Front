import React, { Component } from "react";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <div className="contacts-title">Контакты</div>
        <div className="contacts-blocks">
          <div className="contact-block">
            <div className="contact-block-title">Москва</div>
            <div className="contact-block-text contact-block-text1">
              115191, г.Москва, <br />
              ул. Мытная, 66
            </div>
            <div className="contact-block-text contact-block-text2">
              +7 (495)136-40-95 <br />
              hello@parma.ru
            </div>
          </div>
          <div className="contact-block">
            <div className="contact-block-title">Пермь</div>
            <div className="contact-block-text contact-block-text1">
              614068, г.Пермь, <br />
              ул. Ленина, 77а
            </div>
            <div className="contact-block-text contact-block-text2">
              +7 (342)254-34-34 <br />
              hello@parma.ru
            </div>
          </div>
        </div>
      </div>
    );
  }
}
