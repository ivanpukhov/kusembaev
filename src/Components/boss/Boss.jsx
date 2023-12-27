import boss__graphic from "../../images/Union.webp";
import boss from "../../images/boss/boss.webp";
import boss__graphicRight from "../../images/boss/boss__graphic-right.webp";

const Boss = () => {
    const textContent = {
        subtitle: "Кто тут главный",
        title: "Максат Кузембаев",
        description: [
            "Я создаю Tinder для бизнеса, где каждая из сторон получает заветный match, с выгодой для себя и своей компании.",
            "Знакомлю и показываю преимущества \"Жениха и невесты\", лучше чем Роза Сябитова ;)"
        ]
    };

    return (
        <section className="content mwrapper">
            <div className="boss wrapper">
                <figure className="boss__graphic">
                    <img src={boss__graphic} alt="Графический элемент"/>
                </figure>
                <figure className="boss__photo">
                    <img src={boss} alt="Фотография Максата Кузембаева"/>
                </figure>
                <article className="boss__text">
                    <h2 className="boss__subtitle">{textContent.subtitle}</h2>
                    <h1 className="boss__title">{textContent.title}</h1>
                    {textContent.description.map((text, index) => (
                        <p key={text} className="boss__description">{text}</p>
                    ))}
                </article>
                <figure className="boss__graphic-right">
                    <img src={boss__graphicRight} alt="Дополнительный графический элемент"/>
                </figure>
            </div>
        </section>
    );
}

export default Boss;
