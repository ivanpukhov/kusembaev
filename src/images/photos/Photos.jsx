import photos1 from "./1.png";
import photos2 from "./2.png";
import photos3 from "./3.png";
import photos4 from "./4.png";
import photos5 from "./5.png";
import photos6 from "./6.png";

const Photos = () => {
    const textContent = {
        researchTitle: "Личное исследование и опросы:",
        researchDescription: "Как правило, компаниям не требуется постоянное содержание в штате высококвалицированных специалистов, и им достаточно получить те знания и информацию, которая нужна в моменте, 'Здесь и сейчас'. Гораздо проще и быстрее получить эти знания и передать текущим сотрудникам, тем самым не расширять штат и бюджеты на поиск и онбординг. С другой стороны, специалисты высокого уровня, не всегда готовы покидать свое текущее рабочее место, но вполне готовы поработать в свободное время и делиться знаниями."
    };

    return (
        <section className='order6'>
            <div className="photos mt68">
                <figure className="photos__column">
                    <img src={photos1} alt="Описание фото 1"/>
                </figure>
                <div className="photos__string">
                    <figure className="photos__string-item">
                        <img src={photos2} alt="Описание фото 2"/>
                    </figure>
                    <figure className="photos__string-item">
                        <img src={photos3} alt="Описание фото 3"/>
                    </figure>
                </div>
                <figure className="photos__column">
                    <img src={photos4} alt="Описание фото 4"/>
                </figure>
                <div className="photos__string">
                    <figure className="photos__string-item">
                        <img src={photos5} alt="Описание фото 5"/>
                    </figure>
                    <figure className="photos__string-item">
                        <img src={photos6} alt="Описание фото 6"/>
                    </figure>
                </div>
            </div>
            <article className="benefit wrapper">
                <h3 className='mt68'>{textContent.researchTitle}</h3>
                <p>{textContent.researchDescription}</p>
            </article>
        </section>
    );
}

export default Photos;
