import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page404 from "./Page404";
import { fetchBrands } from "../store/actions/asyncActions/brands";
import BrandName from "../components/brands/BrandName";
import BrandAdd from "../components/brands/BrandAdd";
import BrandEdit from "../components/brands/BrandEdit";
import BrandDel from "../components/brands/BrandDel";

function BrandsPage() {
  const dispatch = useDispatch();
  const { brands, errorBrands } = useSelector((state) => state.brandsReducer);
  const [brandName, setBrandName] = useState("");
  const [brandEmpty, setBrandEmpty] = useState(false);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <>
      {errorBrands ? (
        <Page404 />
      ) : (
        <div className="brand">
          <div className="brand__menu">
            {brandEmpty ? (
              <div>Введите значение</div>
            ) : (
              <>
                <BrandName name={brandName} setName={setBrandName} />
                <BrandAdd
                  name={brandName}
                  setName={setBrandName}
                  empty={setBrandEmpty}
                />
              </>
            )}
          </div>
          <ul className="brand__items">
            {brands.map((brand) => (
              <li className="brand__item" key={brand.id}>
                {brand.name}
                <BrandDel name={brand.name} />
                <BrandEdit name={brand.name} id={brand.id} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default BrandsPage;
