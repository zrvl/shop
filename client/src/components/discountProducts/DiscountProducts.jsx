import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/asyncActions/products";
import Card from "../card/Card";
import discount from "./discountProducts.module.scss";

const DiscountProducts = () => {
  const dispatch = useDispatch();
  const { products, errorProducts } = useSelector(
    (state) => state.productsReducer
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className={discount.products}>
      <h2 className={`${discount.products__title} title`}>Знижки</h2>
      <div className={discount.products__items}>
        {products.slice(0, 5).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default DiscountProducts;
