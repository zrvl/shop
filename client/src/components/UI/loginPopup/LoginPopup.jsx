import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import SignIn from "../../UI/signIn/SignIn";
import SignUp from "../../UI/signUp/SignUp";
import popup from "./popup.module.scss";

const LoginPopup = (props) => {
  const [activeBtn, setActiveBtn] = useState({
    signIn: true,
    signUp: false,
  });

  const closePopup = () => {
    props.setOpenPopup(false);
  };

  const changeValueLogin = (e) => {
    if (e.target.textContent == "Вхід") {
      setActiveBtn({ signIn: true, signUp: false });
    } else if (e.target.textContent == "Реєстрація") {
      setActiveBtn({ signIn: false, signUp: true });
    }
  };
  return (
    <div className={popup.login}>
      <div className={popup.login__top}>
        <button onClick={changeValueLogin} className={popup.login__btn}>
          Вхід
        </button>
        <button onClick={changeValueLogin} className={popup.login__btn}>
          Реєстрація
        </button>
        <button onClick={closePopup} className={popup.login__close}>
          <GrFormClose className={popup.login__icon} />
        </button>
      </div>
      <div className={popup.login__content}>
        {activeBtn.signIn ? (
          <SignIn close={props.setOpenPopup} />
        ) : activeBtn.signUp ? (
          <SignUp close={props.setOpenPopup} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
