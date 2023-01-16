import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from './UI/Logout'
import { TfiYoutube, TfiFacebook, TfiInstagram, TfiShoppingCart } from 'react-icons/tfi'
import {BsFillTelephoneFill, BsHeart} from 'react-icons/bs'
import {BiRightArrowCircle} from 'react-icons/bi'
import {GoSignIn, GoSearch} from 'react-icons/go'
import {MdCompareArrows} from 'react-icons/md'
import {SiJavascript} from 'react-icons/si'
import {AiOutlineHome} from 'react-icons/ai'

const Layout = () => {
  const authUser = useSelector(state => state.usersReducer)

  return (
    <>
      <header>
          <div className="header">
            <div className="header-top">
              <div className="header-top__wrapper">
              <div className="header-top__contact">
                <ul className="header-top__contact-items">
                  <li className="header-top__contact-item">
                    <TfiYoutube />
                  </li>
                  <li className="header-top__contact-item">
                    <TfiFacebook />
                  </li>
                  <li className="header-top__contact-item">
                    <TfiInstagram />
                  </li>
                  <li className="header-top__contact-item">
                    <BsFillTelephoneFill/>
                    Телефони
                  </li>
                </ul>
              </div>
              <div className="header-top__menu">
                {
                  authUser.isAuth ?
                  <div className="header-top__content">
                    <div className="header-top__content-name">
                      Hello <p className="header-top__content-text">{ authUser.user.email }</p>
                    </div>
                    <div className="header-top__content-role">
                      Role <p className="header-top__content-text">{ authUser.user.role }</p>
                    </div>
                    <Logout />
                  </div>
                  :
                <ul className="header-top__menu-items">
                  <li className="header-top__menu-item">
                    <BiRightArrowCircle/>
                    <NavLink className="header-top__menu-link" to="/autorization">Вхід</NavLink>
                  </li>
                  <li className="header-top__menu-item">
                    <GoSignIn/>
                    <NavLink className="header-top__menu-link" to="/registration">Реєстрація</NavLink>
                  </li>
                </ul>
                }
                <ul className="header-top__menu-items">
                  <li className="header-top__menu-item">
                    <BsHeart/>
                    Бажання
                  </li>
                  <li className="header-top__menu-item">
                    <MdCompareArrows/>
                    Порівняння
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-mid">
              <div className="header-mid__wrapper">
                <div className="header-mid__search">
                  <input className="header-mid__search-input" type="text" placeholder='Пошук..' />
                  <button className="header-mid__search-btn">
                    <GoSearch/>
                  </button>
                </div>
                <div className="header-mid__logo">
                  <NavLink to="/">
                    <SiJavascript/>
                  </NavLink>
                </div>
                <div className="header-mid__shop">
                  <button className="header-mid__shop-btn">
                    Товарів 0 на (0.00 грн.)
                    <TfiShoppingCart/>  
                  </button>
                </div>
              </div>
            </div>
            <div className="header-bottom">
              <div className="header-bottom__wrapper">
                {
                  authUser.isAuth
                }
                <ul className="header-bottom__items">
                  <li className="header-bottom__item header-bottom__item-home">
                    <NavLink to="/">
                      <AiOutlineHome/>
                    </NavLink>
                  </li>
                  <li className="header-bottom__item">
                    <NavLink>Скутери</NavLink>
                    </li>
                  <li className="header-bottom__item"> 
                    <NavLink>Мопеди</NavLink>
                    </li>
                  <li className="header-bottom__item">
                    <NavLink>Мотоцикли</NavLink>
                    </li>
                  <li className="header-bottom__item">
                    <NavLink>Трицикли</NavLink>
                    </li>
                  <li className="header-bottom__item">
                    <NavLink>Квадрокцикли</NavLink>
                    </li>
                  <li className="header-bottom__item">
                    <NavLink>Силова техніка</NavLink>
                    </li>
                  <li className="header-bottom__item">
                    <NavLink>Аксексуари</NavLink>
                    </li>
                  <li className="header-bottom__item">
                    <NavLink>Запчастини</NavLink>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    {/* //     <header className="header">
    //       <div className="header__menu">
    //         {
    //           authUser.isAuth ?
    //           <>
    //             <div className="header__content">
    //               <div className="header__content-name">
    //                 Hello <p className="header__content-text">{ authUser.user.email }</p>
    //               </div>
    //               <div className="header__content-role">
    //                 Role <p className="header__content-text">{ authUser.user.role }</p>
    //               </div>
    //               <Logout />
    //             </div>
    //             <ul className="header__items">
    //             <li className="header__item">
    //               <NavLink to="/">Home Page</NavLink>
    //             </li>
    //             <li className="header__item">
    //               <NavLink to={'/users'}>Users</NavLink>
    //             </li>
    //             <li className="header__item">
    //               <NavLink to={'/products'}>Products</NavLink>
    //             </li>
    //             <li className="header__item" >
    //               <NavLink to={'/brands'}>Brands</NavLink>
    //             </li>
    //             <li className="header__item" >
    //               <NavLink  to={'/types'}>Types</NavLink>
    //             </li>
    //           </ul>
    //         </>
    //           :
    //           <></>
    //         }
    //         <ul className="header__items">
    //           <li className="header__item">
    //             <NavLink to="/">Home Page</NavLink>
    //           </li>
    //         </ul>
    //         <ul className="header__reg">
    //           <li className="header__reg-item">
    //             <NavLink to="/autorization">Sign in</NavLink>
    //           </li>
    //           <li className="header__reg-item">
    //             <NavLink to="/registration">Sign up</NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //       {
    //         !authUser.isAuth ?
    //         <ul className="header__items">
    //           <li className="header__item">
    //             <NavLink to="/">Home Page</NavLink>
    //           </li>
    //         </ul>
    //         :
    //         <></>
    //         <ul className="header__items">
    //           <li className="header__item">
    //             <NavLink to="/">Home Page</NavLink>
    //           </li>
    //           <li className="header__item">
    //             <NavLink to={'/users'}>Users</NavLink>
    //           </li>
    //           <li className="header__item">
    //             <NavLink to={'/products'}>Products</NavLink>
    //           </li>
    //           <li className="header__item" >
    //             <NavLink to={'/brands'}>Brands</NavLink>
    //           </li>
    //           <li className="header__item" >
    //             <NavLink  to={'/types'}>Types</NavLink>
    //           </li>
    //         </ul>
    //       }
    //     </header> */}
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        footer
      </footer>
    </>
  )
}

export default Layout