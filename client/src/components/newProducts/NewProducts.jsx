import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/asyncActions/products";
import Card from "../card/Card";
import newProducts from "./newProducts.module.scss";

const NewProducts = () => {
  const dispatch = useDispatch();
  const { products, errorProducts } = useSelector(
    (state) => state.productsReducer
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className={newProducts.new__products}>
      <h2 className={`${newProducts.new__products_title} title`}>Новинки</h2>
      <div className={newProducts.new__products_items}>
        {products.slice(0, 5).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default NewProducts;
