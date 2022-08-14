import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import traced1 from "../img/image 15 (Traced).png";
import traced2 from "../img/image 16 (Traced).png";
import traced3 from "../img/image 17 (Traced).png";
import traced4 from "../img/image 18 (Traced).png";

AOS.init();
const Card = () => {

    return (
        <div id="card">
            <div className="container">

                <div className="card">
                    <div className="card__Title">
                        <h1>Наши услуги</h1>
                    </div>
                    <div className="card__MinCard">
                        <div className="card__MinCard__cards" data-aos="fade-up-right">
                            <h4 className="card__MinCard__cards__title2">Срочный вызов</h4>
                            <div className="card__MinCard__cards__p3">
                                <p>Скорая медицинская помощь взрослым и детям. Профессиональная бригада с врачом
                                    прибудет в
                                    течение 20 минут.
                                </p>
                                <p>Квалифицированный врач проведет осмотр на месте, снимет симптомы, облегчит
                                    самочувствие и
                                    назначит правильное лечение.</p>

                                <p>
                                    Врач останется рядом, дождавшись стабилизации состояния. По состоянию здоровья будет
                                    предложено сопровождение в клинику для дальнейшей диагностики.
                                </p>
                            </div>

                        </div>
                        <div className="card__MinCard__cards" data-aos="fade-left">
                            <h4 className="card__MinCard__cards__title2">Транспортировка</h4>
                            <div className="card__MinCard__cards__p3">
                                <p> Все машины оборудованы гидравлическими системами FERNO, которые позволяют с
                                    комфортом, без тряски доставить пациентов до медицинского учреждения.
                                </p>

                                <p> Перевозка пациентов проводится на всей территории КР и за её пределами</p>

                                <p>
                                    В случае резкого ухудшения состояния, все реанимобили оснащены необходимым
                                    оборудованием и медикаментами для стабилизации состояния организма.
                                </p>
                            </div>

                        </div>
                        <div className="card__MinCard__cards" data-aos="fade-up-right">
                            <h4 className="card__MinCard__cards__title2">Снятие интоксикации</h4>
                            <div className="card__MinCard__cards__p3">
                                <p> Комплексная восстановительная система детоксикации организма с применением
                                    витаминотерапии, ноотропных и гепатопротекторных препаратов, позволит в короткий
                                    срок вывести из организма алкоголь и продукты его распада.
                                </p>
                                <p> После очистки наблюдается нормализация общего состояния, работы сердечно- сосудистой
                                    системы, снижение артериального давления и чувства тревоги ,апатии , уменьшение
                                    эффекта «похмелья»
                                </p>
                            </div>

                        </div>
                        <div className="card__MinCard__cards" data-aos="fade-left">
                            <h4 className="card__MinCard__cards__title2">Санавиация</h4>
                            <div className="card__MinCard__cards__p3">
                                <p> Благодаря регулярным или чартерным рейсам осуществляем быструю и комфортабельную
                                    транспортировку пациента в медицинское учреждение.
                                </p>
                                <p> Вся авиация оборудована средствами для ухода и поддержания нужного уровня
                                    жизнедеятельности организма.
                                </p>
                            </div>

                        </div>
                        <div className="card__MinCard__cards" data-aos="fade-up-right">
                            <h4 className="card__MinCard__cards__title2">Дежурство на мероприятиях</h4>
                            <div className="card__MinCard__cards__p3">
                                <p>Постоянное присутствие квалифицированной и подготовленной бригады неотложной медицинской помощи на мероприятиях скопления людей, вне зависимости от продолжительности. концерты· корпоративы · свадьбы · похороны · спортивные мероприятия · тренинги · выставки Детские мероприятия
                                </p>

                            </div>

                        </div>
                        <div className="card__MinCard__cards" data-aos="fade-left">
                            <h4 className="card__MinCard__cards__title2">Вызов узких специалистов</h4>
                            <div className="card__MinCard__cards__p3">
                                <p>Нарколог Уролог Хирург Невропатолог Психиатр Травматолог  Нефролог Кардиолог  Реаниматолог   Педиатр Семейный врач
                                </p>

                            </div>

                        </div>
                    </div>

                    <div className="card__mather">
                        <div className="card__mather__column">
                            <div className="card__mather__column__columnRev">
                                <img src={traced1} alt=""/>
                                <h3 className="card__mather__column__columnRev__p">Работаем день и ночь</h3>
                            </div>
                            <div className="card__mather__column__columnRev">
                                <img src={traced2} alt=""/>
                                <h3 className="card__mather__column__columnRev__p">Работаем день и ночь</h3>
                            </div >
                            <div  className="card__mather__column__columnRev">
                                <img src={traced3} alt=""/>
                                <h3 className="card__mather__column__columnRev__p">Работаем день и ночь</h3>
                            </div>
                            <div  className="card__mather__column__columnRev">
                                <img src={traced4} alt=""/>
                                <h3 className="card__mather__column__columnRev__p">Работаем день и ночь</h3>
                            </div>
                        </div>

                    </div>


                </div>


            </div>
        </div>
    );
};

export default Card;