import React from "react";

const SpecModal = ({img, name, desc}) => {
    return (
        <div className="specModal modalContent">
            <div className="specModal__left">
                <div className="specModal__image">
                    <img src={img} alt=""/>
                </div>
                <div className="specModal__name">
                    {name}
                </div>
                <div className="specModal__desc">
                    {desc}
                </div>
            </div>
            <div className="specModal__right">
                <div className="modalContent__title">
                    Задайте вопрос эксперту
                </div>
                <div className="modalContent__form">
                    <div className="modalContent__input">
                        <input type="text" placeholder="Ваш email адрес"/>
                    </div>

                    <div className="modalContent__input">
                        <textarea type="text" placeholder="Ваш вопрос"></textarea>
                    </div>
                </div>
                <div className="modalContent__btn specModal__btn">
                    Задать вопрос эксперту
                </div>
                <div className="modalContent__title specModal__title">
                    Созвонимся?
                </div>
                <div className="specModal__form">
                    <div className="modalContent__input">
                        <input type="text" placeholder="Ваш email адрес"/>
                    </div>
                    <div className="modalContent__btn specModal__btn">
                        Созвониться с экспертом                        </div>
                </div>
            </div>

        </div>

    )
}

export default SpecModal
