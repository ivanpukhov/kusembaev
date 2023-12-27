import brain from "../../images/brain.webp";
import Modal from "../Modal";
import ConsultModal from "../ConsultModal";

const Service = ({ service }) => {
    const textContent = {
        buttonText: "Попробовать"
    };

    return service.map((item, index) => (
        <div key={index} className="others__item">
            <div className="others__content">
                <div className="others__title text-orange">
                    {item.name}
                </div>
                <div className="others__desc">
                    {item.description}
                </div>
                <div className="others__priceBy text-orange">
                    {item.priceBy}
                </div>
            </div>
            <div className="others__right">
                <div className="others__brain">
                    <img src={brain} alt="brain"/>
                </div>
                <div className="others__btn text-orange">

                    <Modal width={'925px'} height={'350px'} component={ConsultModal} title={item.name} btn={textContent.buttonText} img={brain}/>

                </div>
            </div>
        </div>
    ));
}

export default Service;
