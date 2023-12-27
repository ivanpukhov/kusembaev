import React from "react";

const ConsultModal = ({img, title} ) => {
  return(
      <div className="modalContent">
          <div className="modalContent__left">
              <img src={img} className="card__img" alt=""/>
          </div>
          <div className="modalContent__right">
              <div className="modalContent__title">{title}</div>
              <div className="modalContent__form">
                  <div className="modalContent__input">
                      <input type="text" placeholder="Ваш email адрес"/>
                  </div>
                  <div className="modalContent__input">
                      <input type="text" placeholder="Ваш email адрес"/>
                  </div>
                  <div className="modalContent__btn">Получить консультацию</div>
              </div>
          </div>
      </div>
  )
}

export default ConsultModal
