import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../images/fox.svg";
import header from "./header.module.scss";
import { TfiFacebook, TfiInstagram } from "react-icons/tfi";
import { FaBalanceScale, FaUser } from "react-icons/fa";
import { BsFillTelephoneFill, BsHeartFill } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { GoSignIn, GoSearch, GoLocation } from "react-icons/go";
import { IoIosCart } from "react-icons/io";
import { AiOutlineMore } from "react-icons/ai";
import LoginPopup from "../UI/loginPopup/LoginPopup";

const Header = () => {
  const authUser = useSelector((state) => state.usersReducer);
  const [openPopup, setOpenPopup] = useState(false);

  const loginPopup = () => {
    setOpenPopup(true);
  };

  return (
    <div className={header.header}>
      {openPopup ? <LoginPopup setOpenPopup={setOpenPopup} /> : <></>}
      <div className={header.top}>
        <div className={`${header.top__container} container`}>
          <div className={header.left}>
            <div className={header.logo}>
              <NavLink to="/">
                <img className={header.logo__icon} src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className={header.location}>
              <GoLocation className={header.location__icon} />
              <p>Кропивницький</p>
            </div>
            <div className={header.contacts}>
              <BsFillTelephoneFill className={header.contacts__phone_icon} />
              <div className={header.contacts__box}>
                <a className={header.contacts__phone} href="tel:+380000000000">
                  <span className={header.contacts__num}>+380000000000</span>
                </a>
                <NavLink className={header.contacts__text} to="/">
                  Зворотній дзвінок
                </NavLink>
              </div>
            </div>
          </div>
          <div className={header.right}>
            <nav className={header.nav}>
              <ul className={header.items}>
                <li className={header.item}>
                  <NavLink className={header.item__link} to="/">
                    Блог
                  </NavLink>
                </li>
                <li className={header.item}>
                  <NavLink className={header.item__link} to="/">
                    Контакти
                  </NavLink>
                </li>
                <li className={header.item}>
                  <NavLink className={header.item__link} to="/">
                    Оплата і доставка
                  </NavLink>
                </li>
                <li className={header.item}>
                  <NavLink className={header.item__link} to="/">
                    Повернення
                  </NavLink>
                </li>
                <li className={header.item}>
                  <NavLink className={header.item__link} to="/">
                    <TfiInstagram className={header.item__icon} />
                  </NavLink>
                </li>
                <li className={header.item}>
                  <NavLink className={header.item__link} to="/">
                    <TfiFacebook className={header.item__icon} />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={header.bottom}>
        <div className="container">
          <div className={header.wrapper}>
            <div className={header.menu}>
              <div className={header.menu__icon}>
                <BiListUl className={header.menu__logo} />
              </div>
              <div className={header.menu__text}>Каталог товарів</div>
            </div>
            <form className={header.search} action="">
              <input
                className={header.search__input}
                type="text"
                placeholder="Мені треба... (Мотоцикл, запчастини)"
              />
              <button className={header.search__btn}>
                <GoSearch className={header.search__icon} />
              </button>
            </form>
            <div className={header.login}>
              {authUser.isAuth ? (
                <div className={header.login__content}>
                  <div className={header.login__text}>
                    Доброго дня,
                    <span className={header.login__name}>
                      {authUser.user.email}
                    </span>
                  </div>
                  <div className={header.login__user}>
                    <NavLink className={header.login__link} to="/">
                      Профіль
                      <FaUser className={header.login__link_user} />
                    </NavLink>
                    {authUser.user.role == "ADMIN" ? (
                      <>
                        <AiOutlineMore className={header.login__link_dot} />
                        <NavLink
                          className={`${header.login__link} admin-link`}
                          to="admin"
                        >
                          Адмін панель
                        </NavLink>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <button onClick={loginPopup} className={header.login__btn}>
                    Увійти
                  </button>
                  <GoSignIn className={header.login__icon} />
                </>
              )}
            </div>
            <div className={header.actions}>
              <IoIosCart className={header.actions__icon} />
              <BsHeartFill className={header.actions__icon} />
              <FaBalanceScale className={header.actions__icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
