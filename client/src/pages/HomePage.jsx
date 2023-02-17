import React from "react";
import Slider from "../components/carousel/Slider";
import InfoCards from "../components/UI/infoCards/InfoCards";
import TopCategory from "../components/topCategory/TopCategory";
import NewProducts from "../components/newProducts/NewProducts";
import DiscountProducts from "../components/discountProducts/DiscountProducts";
import News from "../components/news/News";

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <Slider />
        <InfoCards />
        <TopCategory />
        <NewProducts />
        <DiscountProducts />
        <News />
      </div>
    </div>
  );
};

export default HomePage;
