import React, {useEffect, useState} from 'react';
import {animated, useSpring} from 'react-spring';
import sliderBtn from '../images/slider__btn.svg';
import Accordion from "./Accordion";

const tabs = [{
    title: 'Консалтинг',
    content: 'Консалтинг - это широкая область бизнес-услуг, которая включает в себя различные аспекты консультаций и советов по управлению, стратегическому планированию, маркетингу, финансам и другим сферам',
    faqs: [{
        question: 'Что такое консалтинг?',
        answer: 'Консалтинг - это профессиональная услуга, предоставляемая экспертами (консультантами) для решения бизнес-проблем и оптимизации бизнес-процессов.',
    }, {
        question: 'Какие виды консалтинга существуют?',
        answer: 'Существует множество видов консалтинга, включая стратегический консалтинг, управленческий консалтинг, информационные технологии, маркетинг, финансы, юридический консалтинг и многое другое.',
    }, {
        question: 'Когда компания нуждается в услугах консультанта?',
        answer: 'Компания может обратиться к консультанту, когда сталкивается с проблемами, которые требуют экспертных знаний и опыта для их решения, или когда она стремится оптимизировать свои бизнес-процессы и стратегию.',
    }, {
        question: 'Как выбрать консультанта для своей компании?',
        answer: 'Для выбора консультанта нужно учитывать его опыт, репутацию, специализацию и рекомендации от других клиентов. Важно также проверить, как консультант понимает вашу отрасль и бизнес-модель.',
    }, {
        question: 'Какие преимущества консалтинга для компании?',
        answer: 'Консалтинг может помочь компании улучшить эффективность, повысить прибыльность, разработать стратегию роста, оптимизировать бизнес-процессы и многое другое.',
    }, {
        question: 'Сколько стоит услуга консультанта?',
        answer: 'Стоимость консалтинговых услуг зависит от множества факторов, включая сложность задачи, продолжительность проекта и опыт консультанта. Обычно консультанты работают на почасовой или проектной основе.',
    }, {
        question: 'Каковы основные этапы консалтингового процесса?',
        answer: 'Консалтинговый процесс включает в себя анализ текущей ситуации, разработку рекомендаций, планирование и внедрение изменений, а также оценку результатов.',
    }, {
        question: 'Могу ли я использовать консалтинг для развития собственной карьеры?',
        answer: 'Да, консалтинговые услуги могут быть полезными для профессионалов, желающих развивать свою карьеру. Консультанты могут помочь с разработкой стратегии карьерного роста и решением профессиональных задач.',
    }, {
        question: 'Как избежать возможных проблем при работе с консультантом?',
        answer: 'Для избежания проблем важно четко сформулировать цели проекта, установить контрольные точки и сроки выполнения, а также поддерживать открытую коммуникацию с консультантом.',
    }, {
        question: 'Каковы успешные примеры применения консалтинга в бизнесе?',
        answer: 'Некоторые успешные примеры включают в себя реструктуризацию компаний, разработку инновационных стратегий, улучшение маркетинговых кампаний и оптимизацию производственных процессов.',
    }]
}, {
    title: 'Нетворкинг', content: '', faqs: [{
        question: 'Что такое нетворкинг и как он связан с продажами?',
        answer: 'Нетворкинг - это процесс создания и поддержания профессиональных связей и контактов. Он связан с продажами, потому что хорошие деловые отношения и контакты могут помочь привлекать новых клиентов и партнеров.',
    }, {
        question: 'Какие преимущества может предоставить нетворкинг для продаж?',
        answer: 'Какие мероприятия и платформы подходят для нетворкинга?',
    }, {
        question: 'Какие мероприятия и платформы подходят для нетворкинга?',
        answer: 'Мероприятия для нетворкинга могут включать в себя бизнес-конференции, семинары, вебинары, профессиональные ассоциации, социальные сети (LinkedIn, Twitter), и даже местные мероприятия и общественные клубы.',
    }, {
        question: 'Как эффективно строить профессиональные связи на мероприятиях?',
        answer: 'Для успешного нетворкинга важно быть открытым для общения, задавать вопросы, слушать, а не только рассказывать о себе, обмениваться контактами и вести деловую переписку после мероприятия.',
    }, {
        question: 'Как измерить эффективность нетворкинга в продажах?',
        answer: 'Метрики для измерения эффективности могут включать в себя количество новых контактов, количество заключенных сделок, ROI от участия в мероприятиях и уровень удовлетворенности клиентов.',
    }, {
        question: 'Какие навыки и качества важны для успешного нетворкинга?',
        answer: 'Важные навыки включают в себя коммуникабельность, умение слушать, эмпатию, умение создавать долгосрочные отношения и стратегическое мышление.',
    }, {
        question: 'Как избегать негативных аспектов нетворкинга, таких как навязчивость?',
        answer: 'Важно находить баланс между активным нетворкингом и навязчивостью. Учитесь распознавать, когда стоит остановиться, и уважать личное пространство других.',
    }, {
        question: 'Может ли нетворкинг быть полезным для малых и средних предприятий (МСП)?',
        answer: 'Да, нетворкинг может быть особенно полезным для МСП, так как это позволяет им расширять клиентскую базу и получать поддержку от других предпринимателей.',
    }, {
        question: 'Как начать использовать нетворкинг для увеличения продаж?',
        answer: 'Начните с поиска мероприятий и платформ для нетворкинга, активно участвуйте в общении, углубляйтесь в отношения и постоянно развивайтесь как профессионал.',
    }, {
        question: 'Какие практические советы для успешного нетворкинга в продажах?',
        answer: 'Одним из советов является участие в мероприятиях, которые соответствуют вашей целевой аудитории, а также постоянное поддержание и обновление контактов и отношений. Нетворкинг может быть мощным инструментом для увеличения продаж и развития бизнеса, но требует времени, усилий и стратегического подхода.\n',
    }]
}, {
    title: 'Мастермайнд - сессия',
    content: 'Мастермайнд-сессия - это собрание группы людей с целью обсуждения, генерации и обмена идеями, решениями и опытом по какой-либо конкретной теме или проблеме.',
    faqs: [{
        question: 'Зачем проводить мастермайнд-сессии?',
        answer: 'Мастермайнд-сессии проводятся для совместного решения сложных задач, разработки новых идей, повышения креативности, обмена знаниями и опытом, а также для мотивации и вдохновения участников.',
    }, {
        question: 'Какие темы могут обсуждаться на мастермайнд-сессиях?',
        answer: 'Темы мастермайнд-сессий могут быть разнообразными: от бизнес-стратегии и управления временем до решения личных проблем и профессионального развития.',
    }, {
        question: 'Кто может участвовать в мастермайнд-сессиях?',
        answer: 'Участниками мастермайнд-сессии могут быть люди разного возраста, профессий и опыта. Главное, чтобы они были заинтересованы в данной теме и готовы внести свой вклад.',
    }, {
        question: 'Как проходит мастермайнд-сессия?',
        answer: 'Мастермайнд-сессия может проходить в различных форматах, но обычно включает в себя представление темы, обсуждение идей и решений, групповые упражнения и формирование конкретных планов действий.',
    }, {
        question: 'Сколько времени длится мастермайнд-сессия?',
        answer: 'Время проведения мастермайнд-сессии может варьироваться от нескольких часов до нескольких дней, в зависимости от цели и формата сессии.',
    }, {
        question: 'Какие преимущества мастермайнд-сессий для бизнеса?',
        answer: 'Мастермайнд-сессии способствуют раскрытию потенциала команды, созданию инноваций, решению сложных задач, улучшению коммуникации и развитию лидерских навыков.',
    }, {
        question: 'Как оценить эффективность мастермайнд-сессии?',
        answer: 'Эффективность мастермайнд-сессии можно оценить по количеству сгенерированных идей, решений, выполненных задач, а также по уровню вовлеченности и мотивации участников.',
    }, {
        question: 'Могут ли мастермайнд-сессии быть онлайн?',
        answer: 'Да, мастермайнд-сессии могут проводиться как в оффлайн, так и в онлайн форматах, с использованием видеоконференций и других средств связи.',
    }, {
        question: 'Как начать организацию мастермайнд-сессии?',
        answer: 'Для организации мастермайнд-сессии выберите тему, определите формат и цели сессии, пригласите участников, подготовьте материалы и структуру встречи.Мастермайнд-сессии могут быть мощным инструментом для инноваций и решения проблем, их успешность зависит от организации и участия активных и мотивированных участников.',
    }]
},];

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    const slideAnimation = useSpring({
        to: {
            opacity: slideIn ? 1 : 0, transform: `translateX(${slideIn ? '0%' : (activeIndex > 0 ? '-100%' : '100%')})`,
        }, from: {
            opacity: 0, transform: `translateX(${activeIndex > 0 ? '100%' : '-100%'})`,
        }, reset: true,
    });

    const goToPrevious = () => {
        setSlideIn(false);
        setTimeout(() => {
            setActiveIndex(prevIndex => prevIndex === 0 ? tabs.length - 1 : prevIndex - 1);
            setSlideIn(true);
        }, 200); // Задержка должна соответствовать продолжительности анимации
    };

    const goToNext = () => {
        setSlideIn(false);
        setTimeout(() => {
            setActiveIndex(prevIndex => prevIndex === tabs.length - 1 ? 0 : prevIndex + 1);
            setSlideIn(true);
        }, 200);
    };

    // Обработчик нажатия клавиш
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 37) {
                goToPrevious();
            } else if (e.keyCode === 39) {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (<div className="slider wrapper ">
        <div className="slider__titles ">
            <div className="slider__btn slider__btn-prev" onClick={goToPrevious}>
                <img src={sliderBtn} alt="Previous"/>
            </div>

            {tabs.map((tab, index) => (<div
                key={tab.title}
                onClick={() => setActiveIndex(index)}
                className={index === activeIndex ? 'slider__active' : 'slider__back'}
            >
                {tab.title}
            </div>))}

            <div className="slider__btn slider__btn-next" onClick={goToNext}>
                <img src={sliderBtn} alt="Next"/>
            </div>
        </div>

        <animated.div style={slideAnimation} className="tab-content">
            <div className="faq__content">{tabs[activeIndex].content}</div>
            <Accordion faqs={tabs[activeIndex].faqs || []}/>
        </animated.div>
    </div>);
};

export default Slider;
