import React from 'react';
import logo from "../img/image 8.png";
import med from "../img/Med Skill.png";
import circle from "../img/Frame 1 (2).png";
import ambulance from "../img/image 21.png";
import traced1 from "../img/image 15 (Traced).png";
import traced2 from "../img/image 16 (Traced).png";
import traced3 from "../img/image 17 (Traced).png";
import traced4 from "../img/image 18 (Traced).png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    AOS.init();
    return (
        <section id="hero">
            <div className="container">


                <div className="hero">
                    <div className="hero__title">
                        <div className="hero__title__logo">
                            <img src={logo} alt=""/>
                            <img src={med} alt=""/>
                        </div>
                        <div className="hero__title__Title">
                            <h1 data-aos="zoom-out-right">Скорая медицинская помощь 24/7 </h1>
                        </div>
                        <a href="tel:+996501482929">
                            <button className="hero__title__btn" data-aos="zoom-out-right">
                                <h3 className="hero__title__btn__tel">Вызвать</h3>

                            </button>
                        </a>


                    </div>
                    <div className="hero__img">
                        <img className="hero__img__circle" src={circle} alt=""/>
                        <img className="hero__img__ambulance" data-aos="fade-left" src={ambulance} alt=""/>

                    </div>
                </div>
                <div className="day">
                    <div className="day__div">
                        <img className="day__div__img12" src={traced1} alt=""/>
                        <h3 className="day__div__h312">Работаем день и ночь</h3>
                    </div>
                    <div className="day__div">
                        <img className="day__div__img12" src={traced2} alt=""/>
                        <h3 className="day__div__h312">Профессиональная команда</h3>
                    </div>
                    <div className="day__div">
                        <img className="day__div__img12" src={traced3} alt=""/>
                        <h3 className="day__div__h312">Гарантия на качество сделанной работы</h3>
                    </div>
                    <div className="day__div">
                        <img className="day__div__img12" src={traced4} alt=""/>
                        <h3 className="day__div__h312">Мы любим пунктуальность</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;