import spec1 from "../../images/specialists/1.webp";
import spec2 from "../../images/specialists/2.webp";
import spec3 from "../../images/specialists/3.webp";
import spec4 from "../../images/specialists/4.webp";
import spec5 from "../../images/specialists/5.webp";
import spec6 from "../../images/specialists/6.webp";
import spec7 from "../../images/specialists/7.webp";
import spec8 from "../../images/specialists/8.webp";
import Modal from "../Modal";
import SpecModal from "./SpecModal";
import {useEffect, useState} from "react";

const Specialists = () => {
    let allSpecialists = [{
        id: 1, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec1
    }, {
        id: 2, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec2
    }, {
        id: 3, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec3
    }, {
        id: 4, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec4
    }, {
        id: 5, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec5
    }, {
        id: 6, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec6
    }, {
        id: 7, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec7
    }, {
        id: 8, name: 'Константин Константинович Константинопольский', description: 'Самый крутой', photo: spec8
    }]

    const [specialists, setSpecialists] = useState(allSpecialists);

    useEffect(() => {
        // Функция для определения, какие специалисты должны отображаться
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                // Отображать только специалистов с id 1, 2, 5, 6
                setSpecialists(allSpecialists.filter(s => [1, 2, 5, 6].includes(s.id)));
            } else {
                // Отображать всех специалистов
                setSpecialists(allSpecialists);
            }
        };

        // Вызвать функцию при первом рендере компонента
        handleResize();

        // Добавить слушатель событий на изменение размера окна
        window.addEventListener('resize', handleResize);

        // Удалить слушатель при размонтировании компонента
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const textContent = {
        buttonText: "Задать вопрос эксперту",
        subText: "Ваш вопрос будет отправлен в закрытый чат с экспертами, а ответ вы получите на email или в мессенджер."
    };

    return (<>
        <section className="specialists wrapper">
            {specialists.map((s) => (<article key={s.id} className='specialists__item'>
                <figure className="specialists__photo">
                    <img src={s.photo} alt={`Фотография специалиста ${s.name}`}/>
                </figure>

                <div className="specialists__name">{s.name}</div>
                <div className="specialists__desc">
                    {s.description}
                </div>
                <div className="specialists__btn">
                    <Modal width={'925px'} height={'637px'} component={SpecModal} btn={textContent.buttonText}
                           img={s.photo} name={s.name} desc={s.description}/>
                </div>
            </article>))}
            <div className="specialists__btn onlyMobile">
                <Modal width={'925px'} height={'637px'} component={SpecModal} btn={textContent.buttonText}
                />
            </div>
            <p className="specialists__sub">
                <sup>*</sup>{textContent.subText}
            </p>
        </section>
    </>);
}

export default Specialists;
