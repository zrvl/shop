import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes } from "../store/actions/asyncActions/types";
import TypeName from "../components/types/TypeName";
import TypeAdd from "../components/types/TypeAdd";
import TypeDel from "../components/types/TypeDel";
import ProductInput from "../components/UI/productInput/ProductInput";
import TypeEdit from "../components/types/TypeEdit";
import Page404 from "./Page404";

const TypesPage = () => {
  const dispatch = useDispatch();
  const { types, errorTypes } = useSelector((state) => state.typesReducer);
  const [typeName, setTypeName] = useState("");
  const [emptyType, setEmptyType] = useState(false);

  useEffect(() => {
    dispatch(fetchTypes());
  }, []);

  return (
    <>
      {errorTypes ? (
        <Page404 />
      ) : (
        <div className="type">
          <div className="type__menu">
            {emptyType ? (
              <div>Введите значение</div>
            ) : (
              <div>
                <ProductInput
                  className="type__menu-input"
                  value={typeName}
                  placeholder="Enter type"
                  onChange={(e) => setTypeName(e.target.value)}
                />
                <TypeAdd
                  setName={setTypeName}
                  name={typeName}
                  empty={setEmptyType}
                />
              </div>
            )}
          </div>
          <div className="type__info">
            <ul className="type__items">
              {types.map((type) => (
                <li className="type__item" key={type.id}>
                  {type.name}
                  <TypeDel name={type.name} types={types} />
                  <TypeEdit name={type.name} id={type.id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default TypesPage;
