import svg from "../../images/svg.svg";
import Service from "./Service";

const Services = () => {
    const textContent = {
        pageTitle: "Дополнительные услуги",
        services: [
            {
                name: 'Engagement management + moderation assistance',
                description: 'Отправьте мне ваш оффер с которым вы хотите выйти, и с кем хотите познакомиться.',
                priceBy: 'Зависит от персоны'
            },
            {
                name: 'Brand and sales representative - fix + success fee',
                description: 'Отправьте мне презентацию вашего продукта',
                priceBy: 'Зависит от продукта/услуги'
            },
            {
                name: 'Подбор проверенных исполнителей (аутсорс, аутстафф)',
                description: 'Разработчики, дизайнеры, видео продакшн, маркетологи, аналитики, блогеры, ивент',
                priceBy: 'По запросу'
            }
        ]
    };

    return (
        <div className="others  wrapper">
            <h2 className='mt68'>{textContent.pageTitle}</h2>
            <div className="svg"><img src={svg} alt=""/></div>
            <div className="others__wrapper">
                <Service service={textContent.services}/>
            </div>
        </div>
    );
}

export default Services;
