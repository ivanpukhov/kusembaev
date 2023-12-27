import svg from '../../images/svg.svg'
import mask from '../../images/success/mask.webp'
import nomask from '../../images/success/nomask.webp'
import maskBack from '../../images/success/mask__back.webp'
import nomaskBack from '../../images/success/nomask__back.webp'
import Modal from "../Modal";
import ConsultModal from "../ConsultModal";

const Why = () => {
    const textContent = {
        mainTitle: {
            firstPart: "Успех", secondPart: "начинается с консультации"
        }, firstBlock: {
            title: "Кто я такой?",
            text: "Я настоящий selfmade человек, который более 14 лет занимается развитием бизнеса в различных нишах B2B сегмента. Основные направления в которые я вношу свой вклад: Business, Development, Sales, Marketing. Судя по отзывам, у меня это неплохо получается ;)",
            button: "Читать отзывы"
        }, secondBlock: {
            title: "Зачем мне это нужно?",
            text: "С недавнего времени, я понял, что пора начать делиться своим опытом, знаниями, знакомствами, и тем самым помогать собственникам бизнеса достигать их поставленные цели. Какими невероятными бы они не казались",
            button: "Получить консультацию"
        }, modal: {
            title: 'Есть вопросы?'
        }
    };

    return (<section className="success wrapper mt68">
        <div className="success__header">
            <h2 className="success__title">
                <span className="text-orange">{textContent.mainTitle.firstPart} </span>
                {textContent.mainTitle.secondPart}
            </h2>
            <div className="success__slider-dots">
                <figure className="svg">
                    <img src={svg} alt=""/>
                </figure>
            </div>
        </div>

        <div className="success__content">
            <article className="card">
                <div className="card__left">
                    <h3 className="card__title">{textContent.firstBlock.title}</h3>
                    <p className="card__text">{textContent.firstBlock.text}</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#reviews" className="card__link">{textContent.firstBlock.button}</a>
                </div>
                <figure className="card__image">
                    <img src={maskBack} className="card__img" alt=""/>
                    <img src={mask} className="card__hover" alt=""/>
                </figure>
            </article>

            <article className="card ">
                <div className="card__left">
                    <h3 className="card__title">{textContent.secondBlock.title}</h3>
                    <p className="card__text">{textContent.secondBlock.text}</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="card__link">
                        <Modal width={'925px'} height={'350px'} component={ConsultModal} title={textContent.modal.title} btn={textContent.secondBlock.button} img={nomaskBack}/>
                    </a>
                </div>
                <figure className="card__image">
                    <img src={nomaskBack} className="card__img" alt=""/>
                    <img src={nomask} className="card__hover" alt=""/>
                </figure>
            </article>
        </div>
    </section>);
}

export default Why;
