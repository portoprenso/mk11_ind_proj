import React from "react";
import "../CompareBlock/CompareBlock.css";
import "./LearnMoreBlock.css";
import AOS from "aos";
import "aos/dist/aos.css";
import firstCardImg from '../../assets/default-ultimate.jpg'

import { Link } from "react-router-dom";

const LearnMoreBlock = () => {
  AOS.init();
  return (
    <div className="LearnMoreBlock-body__hero">
      <div className="LearnMoreBlock-body__title">
        <h1>ВЫ НОВИЧОК В MORTAL KOMBAT 11?</h1>
      </div>
      <div className="LearnMoreBlock-body__wrapper">
        <div data-aos="zoom-in" className="LearnMoreBlock__card">
            <div className="LearnMoreBlock__card__inner">
                <img className='LearnMoreBlock__cardImg' src={firstCardImg} alt="firstCardImg"/>
                <div className="LearnMoreBlock__meta">
                  <h3>MORTAL KOMBAT 11 ULTIMATE</h3>
                    <ul>
                        Включает:
                        <li>Базовая игра Mortal Kombat 11</li>
                        <li>Боевой набор 2</li>
                        <li>Mortal Kombat 11: Aftermath</li>
                        <li>Боевой набор</li>
                    </ul>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className="LearnMoreBlock__card">
            <div className="LearnMoreBlock__card__inner">
                <img className='LearnMoreBlock__cardImg' src={firstCardImg} alt="firstCardImg"/>
                <div className="LearnMoreBlock__meta">
                  <h3>БОЕВОЙ НАБОР 2</h3>
                    <ul>
                        Включает:
                        <li>
                            <ul>
                            3 новых бойца
                            <li>Милина</li>
                            <li>Рейн</li>
                            <li>Рэмбо</li>
                            </ul>
                            </li>

                        {/* <li>Боевой набор 2</li>
                        <li>Mortal Kombat 11: Aftermath</li>
                        <li>Боевой набор</li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className="LearnMoreBlock__card">
            <div className="LearnMoreBlock__card__inner">
                <img className='LearnMoreBlock__cardImg' src={firstCardImg} alt="firstCardImg"/>
                <div className="LearnMoreBlock__meta">
                  <h3>MORTAL KOMBAT 11 ULTIMATE</h3>
                    <ul>
                        Включает:
                        <li>
                            <ul>
                            Mortal Kombat 11: Aftermath
                            <li>Новейшая киноистория</li>
                            <li>
                                <ul>
                                3 новых персонажа
                                <li>Шива, Фудзин и Робокоп</li>
                                </ul>
                            </li>
                            <li>3 новых набора</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className="LearnMoreBlock__card">
            <div className="LearnMoreBlock__card__inner">
                <img className='LearnMoreBlock__cardImg' src={firstCardImg} alt="firstCardImg"/>
                <div className="LearnMoreBlock__meta">
                  <h3>БОЕВОЙ НАБОР</h3>
                    <ul>
                        Включает:
                        <li>
                            <ul>
                            Боевой набор
                            <li>Шан Цзун, Ночной Волк, Терминатор, Синдел, Джокер и Спаун</li>
                            <li>6 наборов костюмов и 7 эксклюзивных костюмов</li>
                            </ul>
                        </li>
                        <li>Боевой набор 2</li>
                        <li>Mortal Kombat 11: Aftermath</li>
                        <li>Боевой набор</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreBlock;
