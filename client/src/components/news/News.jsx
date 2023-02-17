import React from "react";
import news from "./news.module.scss";
import image1 from "../../images/phone1.jpg";
const News = () => {
  return (
    <section className={news.news}>
      <h2 className={`${news.title} title`}>Останні новини</h2>
      <div className={news.items}>
        <div className={news.item}>
          <div className={news.item__box}>
            <img src={image1} alt="news-image" className={news.item__img} />
          </div>
          <div className={news.item__data}>08 лютого 2023</div>
          <div className={news.item__title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur blanditiis, ducimus iste itaque cupiditate
          </div>
        </div>
        <div className={news.item}>
          <div className={news.item__box}>
            <img src={image1} alt="news-image" className={news.item__img} />
          </div>
          <div className={news.item__data}>08 лютого 2023</div>
          <div className={news.item__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quas.
          </div>
        </div>
        <div className={news.item}>
          <div className={news.item__box}>
            <img src={image1} alt="news-image" className={news.item__img} />
          </div>
          <div className={news.item__data}>08 лютого 2023</div>
          <div className={news.item__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            perspiciatis.
          </div>
        </div>
      </div>
    </section>
  );
};
export default News;
