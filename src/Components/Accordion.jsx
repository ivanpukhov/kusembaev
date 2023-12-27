import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
const AccordionItem = ({ faq, isOpen, toggle }) => {
    const springStyle = useSpring({
        to: {
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
        },
        from: {
            opacity: 0,
            height: 0,
        }
    });

    return (
        <div className="faq__item">
            <div className="faq__title">
                <div className='faq__question'>{faq.question}</div>
                <div className={'faq__btn text-orange ' + (isOpen ? 'faq__open' : 'faq__closed')} onClick={toggle}>
                </div>
            </div>
            {isOpen && (
                <animated.div style={springStyle} className="faq__answer">
                    {faq.answer}
                </animated.div>
            )}
        </div>
    );
};

const Accordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='faq'>
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    faq={faq}
                    isOpen={index === openIndex}
                    toggle={() => toggleItem(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
