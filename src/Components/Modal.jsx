import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModalComponent = ({contentLabel, component: ComponentToRender, width, title, height, btn, img, name, desc}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };


    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: width,
            maxHeight: height,
            background: 'white',
            borderRadius: '15px',
            padding: '20px',
            width: '100%',
            height: '100%',
            zIndex: 9999999999999999999999999999,
        }, overlay: {
            backgroundColor: 'rgba(48, 48, 48, 0.45)', zIndex: 9999999999999999999999999999
        },
    };

    return (<>
        <div className='cur' onClick={openModal}>{btn}</div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel={contentLabel}
        >
            <ComponentToRender img={img} title={title} name={name} desc={desc}/>
        </Modal>


    </>);
};

export default CustomModalComponent;
