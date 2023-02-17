import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import mainPage from "./productMainPage.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../../store/actions/asyncActions/oneProduct";
import { BsHeartFill, BsCircle } from "react-icons/bs";
import { FaBalanceScale, FaApplePay, FaGooglePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";

const ProductMainPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.oneProductReducer);
  // console.log(window.location);

  useEffect(() => {
    dispatch(fetchOneProduct(name));
  }, []);

  console.log(product);

  return (
    <>
      <section className={mainPage.card}>
        <div className="container">
          <div className={mainPage.card__breadcrumbs}>
            Lorem ipsum dolor sit amet.
          </div>
          <div className={mainPage.card__wrapper}>
            <div className={mainPage.card__left}>
              <div className={mainPage.card__stiker}>Найкраща ціна</div>
              <div className={mainPage.card__box}>
                <img
                  className={mainPage.card__img}
                  src={`http://127.0.0.1:5000/${product.img}`}
                  alt="main product"
                />
              </div>
            </div>
            <div className={mainPage.card__right}>
              <div className={mainPage.card__code}>Код товару: 12345</div>
              <h1 className={mainPage.card__name}>{product.name}</h1>
              <div className={mainPage.card__reviews}>
                <span>*****</span> {product.rating} відгуків
              </div>
              <div className={mainPage.card__availability}>Є в наявності</div>
              <div className={mainPage.card__parameters}>
                <div className={mainPage.card__parameters_text}>Колір</div>

                <NavLink className={mainPage.card__color}>
                  <BsCircle />
                </NavLink>
                <NavLink className={mainPage.card__color}>
                  <BsCircle />
                </NavLink>
                <NavLink className={mainPage.card__color}>
                  <BsCircle />
                </NavLink>
              </div>
              <div className={mainPage.card__price_info}>
                <div className={mainPage.card__price}>{product.price} грн</div>
                <div className={mainPage.card__actions}>
                  <div>
                    <BsHeartFill className={mainPage.card__action} />В бажане
                  </div>
                  <div>
                    <FaBalanceScale className={mainPage.card__action} />В
                    порівняння
                  </div>
                </div>
              </div>
              <div className={mainPage.card__buy}>
                <button className={mainPage.card__btn}>Купити</button>
                <button className={mainPage.card__credit_btn}>
                  Купити в кредит
                </button>
              </div>
              <div className={mainPage.card__payment}>
                <div className={mainPage.card__title}>Оплата</div>
                <div className={mainPage.card__text}>
                  Готівкою, карткою, в кредит, за безготівковим розрахунком для
                  юр.осіб.
                  <NavLink className={mainPage.card__link}>Детальніше</NavLink>
                </div>
                <div className={mainPage.card__logos}>
                  <FaApplePay className={mainPage.card__logo} />
                  <FaGooglePay className={mainPage.card__logo} />
                  <SiVisa className={mainPage.card__logo} />
                </div>
              </div>
              <div className={mainPage.card__warranty}>
                <div className={mainPage.card__title}>Гарантія</div>
                <div className={mainPage.card__text}>
                  <div className={mainPage.card__text_info}>
                    Обмін/повернення товару належної якості протягом 14 днів.
                    <NavLink className={mainPage.card__link}>
                      Детальніше
                    </NavLink>
                  </div>
                  <div className={mainPage.card__text_info}>
                    Офіційна гарантія виробника: 12 міс.
                    <NavLink className={mainPage.card__link}>
                      Детальніше
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={mainPage.characteristic}>
        <div className="container">
          <div className={mainPage.characteristic__title}>
            Характеристики name
          </div>
          <p className={mainPage.characteristic__subtitle}>
            Основні характеристики
          </p>
          <div className={mainPage.characteristic__box}>INFO</div>
        </div>
      </section>
      <section className={mainPage.reviews}>
        <div className="container">
          <div className={mainPage.reviews__top}>
            <div className={mainPage.reviews__title}>
              Відгуки та запитання name
            </div>
            <div className={mainPage.reviews__sign}>***** num</div>
          </div>
          <div className={mainPage.reviews__btns}>
            <button className={mainPage.reviews__btn}></button>
            <button className={mainPage.reviews__btn}></button>
          </div>
          {}
        </div>
      </section>
    </>
  );
};

export default ProductMainPage;
