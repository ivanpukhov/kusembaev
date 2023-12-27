import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from "../../images/logo.svg";
import header__graphic from "../../images/header/header__graphic.svg";
import header__graphicMobile from "../../images/header/header__graphic-mobile.webp";
import header__phoneMobile from "../../images/header/header__phone-mobile.webp";
import header__phone from "../../images/header/header__phone.webp";
import hum from "../../images/hum.svg";
import './Header.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let nav = [
        {'name': 'Главная'},
        {'name': 'Мои партнёры'},
        {'name': 'Эксперты и исполнители'},
        {'name': 'Сервисы для развития'},
        {'name': 'Мероприятия и обучение'},
    ];

    const textContent = {
        navigation: nav.map(item => item.name),
        headerTitles: ["Оптимизация", "Инновации", "Результаты"]
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const renderMenu = () => (
        <nav>
            {textContent.navigation.map((name, index) => (
                <li key={index} className='header__link'>{name}</li>
            ))}
        </nav>
    );

    const renderBurgerMenu = () => (
        <Menu right isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)} width={'100%'}>
            <button className="close-button" onClick={closeMenu}>Закрыть</button>
            {textContent.navigation.map((name, index) => (
                <a key={index} className='menu-item' onClick={closeMenu}>{name}</a>
            ))}
        </Menu>
    );

    // Добавляем предзагрузку для изображений
    useEffect(() => {
        const preloadImages = (images) => {
            images.forEach((image) => {
                new Image().src = image;
            });
        };

        preloadImages([
            header__graphic,         // Загружаем изображения
            header__graphicMobile,   // Загружаем изображения
            header__phoneMobile,     // Загружаем изображения
            header__phone            // Загружаем изображения
        ]);
    }, []);

    return (
        <header className="header">
            <div className="header__top container">
                <div className="logo"><img src={logo} alt=""/></div>
                {isMobile && <div className="burger-button" onClick={toggleMenu}>
                    <img src={hum} alt=""/>
                    <img src="" alt=""/>
                </div>}
                {isMobile ? renderBurgerMenu() : renderMenu()}
            </div>
            <div className="header__content container">
                <div className="header__graphic">
                    <img src={header__graphic} className='onlyDesctop' alt=""/>
                    <img src={header__graphicMobile} className='onlyMobile' alt=""/>
                </div>
                <div className="header__phone">
                    <img src={header__phone} className='onlyDesctop' alt=""/>
                    <img src={header__phoneMobile}  className='onlyMobile' alt=""/>
                </div>
                <h1 className="header__title">
                    {textContent.headerTitles.map((title, index) => (
                        <span key={index} className={index === 2 ? "text-orange" : ""}>{title}</span>
                    ))}
                </h1>
            </div>
        </header>
    );
}

export default Header;
