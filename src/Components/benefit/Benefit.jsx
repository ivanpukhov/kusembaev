import svg from "../../images/svg.svg";
import benefitIcon from "../../images/benefit/benefit.svg";
import benefitHover from "../../images/benefit/benefit__hover.svg";

const Benefit = () => {
    let benefit = [
        {
            'name': 'Оплата через QR',
            'text': 'Первые в СНГ запустили систему по оплате с использованием QR кода. 2016 год. Да, раньше красного банка'
        }, {
            'name': 'Обмен цифровыми документами',
            'text': 'Занимался развитием системы документооборота с использованием ЭЦП'
        }, {
            'name': 'Онлайн ККМ',
            'text': 'Внедряли решение по приёму наличных платежей и фискализации с помощью Онлайн ККМ.'
        }, {
            'name': 'Запуск первого автобана',
            'text': 'Запускали первый автобан в Казахстане Астана- Боровое с системой предоплаты.'
        }, {
            'name': 'Лучший товар Казахстана 2017',
            'text': 'За полтора года подключили к сервисам 15К мерчантов МСБ, и взяли премию "Лучший товар Казахстана 2017"'
        }, {
            'name': '2,5 млрд. прибыли', 'text': 'Сократил расходы и повлиял на прибыль компаний на 2,5 млрд. тенге.'
        }]


    const textContent = {
        quote: "\"Думай глобально, действуй локально!\"",
        quoteAuthor: "Фрэнк Ллойд Райт",
        mainText: [
            "Я провожу персональные консультации с владельцами компаний, где мы находим решения для роста и развития бизнеса. Благодаря высокому уровню насмотренности, я могу предложить нестандартные подходы через growth, cross, performance marketing и PR в различных его проявлениях. Если мы понимаем, что под проект требуются узкопрофильные специалисты, то я помогу с их подбором и персональной рекомендацией.",
            "Оптимальные подходы в IT разработке и технической части, подумаем об автоматизации и оцифровке процессов, интеграциям с различными сервисами.",
            "Рассмотрим вашу текущую стратегию развития и обсудим варианты построения отдела продаж, проведем обучение, и найдем новые точки роста и монетизации."
        ],
        benefitHeading: "Чем я полезен окружающим?",
        advantage: [
            "В текущих реалиях, на рынке труда не так много специалистов в различных отраслях, а на их поиск уходят колоссальное время и деньги. По нашему опыту, специалисты высокого уровня стоят очень дорого, и не каждая компания может их себе позволить. Поэтому как решение, мы предлагаем таких специалистов под \"Проект\" и с более приятным ценником (а иногда и бесплатно) для нанимателя."
        ],
        specialists: "Специалисты которым я доверяю:",
        teamDescription: "Моя команда состоит из профессионалов, которые посвятили своему ремеслу большую часть своей жизни."
    };

    return (
        <div className='order4'>
            <section className="citata">
                <h2 className="text-orange">{textContent.quote}</h2>
                <p className="citata__name">
                    {textContent.quoteAuthor}
                </p>
                <div className="svg">
                    <img src={svg} alt="Графический элемент"/>
                </div>
            </section>

            <section className="benefit wrapper">
                <h3>{textContent.benefitHeading}</h3>
                {textContent.mainText.map(text => (
                    <p key={text}>{text}</p>
                ))}

                <div className="benefit__block">
                    {benefit.map(item => (
                        <article key={item.name} className="benefit__item">
                            <h4>{item.name}</h4>
                            <p>{item.text}</p>
                            <img src={benefitIcon} alt="Иконка преимущества" className="benefit__image"/>
                            <img src={benefitHover} alt="Иконка преимущества при наведении" className="benefit__hover"/>
                        </article>
                    ))}
                </div>

                <h3>Выгода</h3>
                {textContent.advantage.map(text => (
                    <p key={text}>{text}</p>
                ))}

                <h3 className='mt68'>{textContent.specialists}</h3>
                <p>{textContent.teamDescription}</p>
            </section>
        </div>
    );
}

export default Benefit;
