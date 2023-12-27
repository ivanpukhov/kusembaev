import svg from "../../images/svg.svg";
import price1 from "../../images/price/1.webp";
import price2 from "../../images/price/2.webp";
import Modal from "../Modal";
import ConsultModal from "../ConsultModal";

const Price = () => {
    const textContent = {
        pageTitle: "Стоимость услуг", personalConsultation: {
            title: "Персональная консультация",
            description: "Напишите максимально подробно ваш запрос и отправьте мне. После рассмотрения, я задам уточняющие детали и предоставлю ответ по возможности сотрудничества.",
            price: "450 000 ₸",
            buttonText: "Попробовать"
        }, groupConsultation: {
            title: "Групповая консультация",
            description: "Описываем так же как и в персональной консультации, только тут будут привлечены эксперты для проведения первичного аудита. С вашей стороны ко встрече допускается 2 человека.",
            price: "450 000 ₸",
            buttonText: "Попробовать"
        }
    };

    return (
        <section className='price wrapper'>
            <h2 className='mt68'>{textContent.pageTitle}</h2>
            <div className="svg">
                <img src={svg} alt="Описательный текст изображения" />
            </div>
            <article className="price__block">
                <div className="priceCard priceCard-first">
                    <figure className="priceCard-first__image">
                        <img src={price1} alt="Персональная консультация" />
                    </figure>
                    <div className="priceCard-first__content">
                        <div className="priceCard__textBox">
                            <h3 className="priceCard__title">{textContent.personalConsultation.title}</h3>
                            <p className="priceCard__text">{textContent.personalConsultation.description}</p>
                            <p className="priceCard__price">{textContent.personalConsultation.price}</p>
                        </div>
                        <div className="priceCard__link">
                            <Modal width={'925px'} height={'350px'} component={ConsultModal} btn={textContent.personalConsultation.buttonText} title={textContent.personalConsultation.title} img={price1}/>
                        </div>
                    </div>
                </div>
                <div className="priceCard priceCard-second">
                    <div className="priceCard-second__content">
                        <div className="priceCard__textBox">
                            <h3 className="priceCard__title">{textContent.groupConsultation.title}</h3>
                            <p className="priceCard__text">{textContent.groupConsultation.description}</p>
                            <p className="priceCard__price">{textContent.groupConsultation.price}</p>
                        </div>
                        <div className="priceCard__link">
                            <Modal width={'925px'} height={'350px'} component={ConsultModal} btn={textContent.groupConsultation.buttonText} title={textContent.groupConsultation.title} img={price1}/>
                        </div>
                    </div>
                    <figure className="priceCard-second__image">
                        <img src={price2} alt="Групповая консультация" />
                    </figure>
                </div>
            </article>
        </section>
    );}

export default Price;
