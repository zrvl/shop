import React from "react";
import { NavLink } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import card from "./card.module.scss";

const Card = (props) => {
  return (
    <div className={card.top}>
      <div className={card.top__wrapper}>
        <img
          className={card.top__img}
          src={`http://127.0.0.1:5000/${props.product.img}`}
          alt="product-card"
        />
      </div>
      <div className={card.info}>
        <div className={card.info__sticker}>
          <span className={card.info__sticker_text}>Краща ціна</span>
        </div>
        <NavLink
          to={`/products/info/${props.product.name}`}
          className={card.info__title}
        >
          {props.product.name}
        </NavLink>
        <div className={card.info__reviews}>
          <span>*****</span> {props.product.rating} Відгуків
        </div>
        <div className={card.price}>
          <span className={card.price__title}>Ціна:</span>
          <div className={card.price__price}>{props.product.price} грн</div>
          <div className={card.price__text}>Є в наявності</div>
        </div>
      </div>
      <div className={card.bottom}>
        <button className={card.bottom__btn}>Купити</button>
        <div className={card.bottom__actions}>
          <BsHeartFill className={card.bottom__action} />
          <FaBalanceScale className={card.bottom__action} />
        </div>
      </div>
    </div>
  );
};

export default Card;
