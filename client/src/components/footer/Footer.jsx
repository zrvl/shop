import footer from "./footer.module.scss";
import logo from "../../images/fox.svg";
import { TfiFacebook, TfiInstagram } from "react-icons/tfi";

const Footer = () => {
  return (
    <section className={footer.footer}>
      <div className={footer.top}>
        <div className={footer.box}>
          <img className={footer.img} src={logo} alt="logo" />
        </div>
        <div className={footer.info__company}>
          <div className={footer.info__title}>Megafox</div>
          <ul className={footer.items}>
            <li className={footer.item}>Про компанію</li>
            <li className={footer.item}>Контакти</li>
          </ul>
        </div>
        <div className={footer.info__customer}>
          <div className={footer.info__title}>Покупцеві</div>
          <ul className={footer.items}>
            <li className={footer.item}>Доставка і оплата</li>
            <li className={footer.item}>Обмін і повернення</li>
            <li className={footer.item}>Гарантія</li>
            <li className={footer.item}>Статус замовлення</li>
            <li className={footer.item}>Кредит</li>
          </ul>
        </div>
        <div className={footer.info__contacts}>
          <div className={footer.address}>
            <div className={footer.address__title}>Адреса</div>
            <div className={footer.address__text}>
              м.Кропивницький, вул. Садова, 79
            </div>
          </div>
          <div className={footer.socials}>
            <div className={footer.socials__title}>Соцмережі</div>
            <div className={footer.socials__box}>
              <div>
                <TfiFacebook className={footer.social} />
              </div>
              <div>
                <TfiInstagram className={footer.social} />
              </div>
            </div>
          </div>
          <div className={footer.phone}>
            <span className={footer.num}>063</span>
          </div>
        </div>
      </div>
      <div className={footer.bottom}>bottom</div>
    </section>
  );
};
export default Footer;
