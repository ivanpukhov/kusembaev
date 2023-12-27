import event__mask from "../../images/event__mask.png";
import event__maskBack from "../../images/event__mask-back.png";
import event__nomask from "../../images/event__nomask-noback.png";
import event__nomaskBack from "../../images/event__nomask.png";
import nomaskBack from '../../images/success/nomask__back.png'
import event__back from "../../images/event__back.png";

import Contacts from "../contacts/Contacts";
import Modal from "../Modal";
import ConsultModal from "../ConsultModal";

const Events = () => {
    const textContent = {
        joinGroupPart1: "Вступай в группу",
        joinGroupPart2: "единомышленников!",
        joinGroupDescription: "В ближайшее время будет создана закрытая группа для управленцев С-level (CEO, CMO, CFO, COO, HRD и т.д.), в которой будет больше свободы для нетворкинга, и обсуждения более масштабных проектов. Естественно будут инсайты и бизнес завтраки вместе с экспертами представленными на моей платформе. Группа будет ограничена по количеству участников, а уже потом и вовсе станет платной. Так что успей подать заявку!",
        submitButtonText: "Отправить",
        firstBannerTitle: "Кто я такой?",
        firstBannerButtonText: "Читать отзывы",
        secondBannerTitle: "Зачем мне это нужно?",
        secondBannerButtonText: "Получить консультацию",
        phonePlaceholder: 'Номер телефона',
        mailPlaceholder: 'Email адрес'
    };

    return (<div className="event__block wrapper">
        <div className="event ">
            <div className="event__texts">
                <div className="event__title">
                    <h3>{textContent.joinGroupPart1} <span
                        className='text-orange'>{textContent.joinGroupPart2}</span></h3>
                </div>
                <div className="event__text">
                    {textContent.joinGroupDescription}
                </div>
                <div className="event__form">
                    <input type="text" className="event__input" placeholder={textContent.phonePlaceholder}/>
                    <input type="text" className="event__input" placeholder={textContent.mailPlaceholder}/>
                    <div className="event__btn">{textContent.submitButtonText}</div>
                </div>

            </div>
            <div className="event__banners">
                <div className="event__banner">
                    <div className="event__content-banner">
                        <div className="event__title-banner">
                            {textContent.firstBannerTitle}
                        </div>
                        <a href="#reviews" className="event__btn-banner">
                            {textContent.firstBannerButtonText}
                        </a>
                    </div>
                    <div className="event__banner-img">
                        <img src={event__mask} className='event__nomaskBack' alt=""/>
                        <img src={event__maskBack} className='event__nomaskBack dnn' alt=""/>
                    </div>
                </div>
                <div className="event__banner">
                    <div className="event__content-banner">
                        <div className="event__title-banner">
                            <span>Зачем</span> мне <br/>
                            это нужно?
                        </div>
                        <div className="event__btn-banner">

                            <Modal width={'925px'} height={'350px'} component={ConsultModal}
                                   title='Личная консультация' btn={textContent.secondBannerButtonText}
                                   img={nomaskBack}/>

                        </div>
                    </div>
                    <div className="event__banner-img">
                        <img src={event__nomask} className='event__nomaskBack' alt=""/>
                        <img src={event__nomaskBack} className='event__nomaskBack dnn' alt=""/>
                    </div>
                </div>

            </div>


        </div>
        <Contacts/>

        <div className="event__back">
            <img src={event__back} alt=""/>
        </div>
    </div>);
}

export default Events;
