import React from 'react'
import Slick from '../components/UI/slider/Slick'
import { useState } from 'react';
import {useSelector} from 'react-redux'

const HomePage = () => {
  const [name, setName] = useState('');


  
  const changeName = (e) => {
    setName(e.target.name);
  }
  
  return (
    <>
      <section className="home">
        <Slick />
      </section>
      <section className="home-top__products">
        <div className="home-top__wrapper">
          <ul className="home-top__items">
            <li className="home-top__item">
              <button onClick={changeName} name="new">Новинки</button>
            </li>
            <li className="home-top__item">
              <button onClick={changeName} name="top">Топ продажу</button>              
            </li>
            <li className="home-top__item">
              <button onClick={changeName} name="sale">Акції</button>
            </li>
            <li className="home-top__item">
              <button onClick={changeName} name="customer">Вибір покупця</button>
            </li>
            <li className="home-top__item">
              <button onClick={changeName} name="nenki">Nenki</button>
            </li>
          </ul>
          <div className="home-cards">
            {
              name === 'new' ?
              <>
                <div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div>
                <div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div><div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div><div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div>
              </>
              : name === 'top'
              ?
              <>
                <div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div><div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div><div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div><div className="home-card">
                  <div className="home-card__info">
                    <div className="home-card__img">
                      <img src="" alt="" />
                    </div>
                    <div className="home-card__rating">11111</div>
                    <p className="home-card__name">KOVI 300 LITE KT</p>
                    <p className="home-card__price">127000.00 грн.</p>
                    <div className="home-card__count">
                      <input className="home-card__input" type="number" />
                      <button className="home-card__buy">Купити</button>
                    </div>
                  </div>
                  <div className="home-card__bottom">
                    <button>Купити в один клік</button>
                    <button>Задати питання</button>
                  </div>
                </div>
              </>
              :
              <></>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage