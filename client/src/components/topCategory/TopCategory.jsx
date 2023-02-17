import React, { useEffect } from "react";
import { useState } from "react";
import top from "./topCategory.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/asyncActions/products";
import { fetchTypes } from "../../store/actions/asyncActions/types";
import Card from "../card/Card";

const TopCategory = () => {
  const dispatch = useDispatch();
  const { products, errorProducts } = useSelector(
    (state) => state.productsReducer
  );
  const [activeClass, setActiveClass] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { types, errorTypes } = useSelector((state) => state.typesReducer);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchTypes());
  }, []);

  const changeProducts = (name, id) => {
    setActiveClass({ active: name });
    const newProducts = products.filter((product) => product.typeId === id);
    setFilteredProducts(newProducts);
  };

  return (
    <>
      <section className={top.category}>
        <h2 className={`${top.category__title} title`}>
          Топ товарів в категоріях
        </h2>
        <div className={top.category__btns}>
          {types.map((type) => (
            <button
              className={
                activeClass.active === type.name
                  ? `${top.category__btn} ${top.category__btn_active}`
                  : `${top.category__btn}`
              }
              key={type.id}
              onClick={(e) => changeProducts(e.target.textContent, type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>
        <div className={top.category__items}>
          {filteredProducts.length > 0 ? (
            filteredProducts
              .slice(0, 5)
              .map((product) => <Card key={product.id} product={product} />)
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default TopCategory;
