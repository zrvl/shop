import React from 'react'
import { useState, useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrands } from '../store/actions/asyncActions/brands';
import { fetchTypes } from '../store/actions/asyncActions/types';
import { fetchProducts } from '../store/actions/asyncActions/products';
import ProductImg from '../components/products/ProductImg';
import Products from '../components/products/Products';
import FilterInput from '../components/filter/FilterInput';
import ProductInput from '../components/UI/productInput/ProductInput';
import ProductSelect from '../components/UI/productSelect/ProductSelect';
import styleInput from '../components/UI/productInput/ProductInput.module.css';
import styleSelect from '../components/UI/productSelect/ProductSelect.module.css';
import axios from 'axios';
import { usePagination } from '../hooks/usePagination';
import BackOrNext from '../components/UI/productPagination/BackOrNext';
import Page404 from './Page404'

const ProductsPage = () => {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [brandId, setBrandId] = useState();
  const [typeId, setTypeId] = useState();
  const [file, setFile] = useState({});
  const [filterName, setFilterName] = useState('')
  const [emptyValue, setEmptyValue] = useState(false);
  const dispatch = useDispatch();
  const {products, errorProducts} = useSelector(state => state.productsReducer)
  const productsCount = useSelector(state => state.productsReducer.count)
  const {types, errorTypes} = useSelector(state => state.typesReducer);
  const {brands, errorBrands} = useSelector(state => state.brandsReducer)
  const [activePage,setActivePage] = useState(1);
  const [limit, setLimit] = useState(5)
  const btnsPagination = usePagination(productsCount, limit, activePage)

  useEffect(() => {
    dispatch(fetchBrands())
    dispatch(fetchTypes())
    dispatch(fetchProducts())
  }, [])
  
  useEffect(()=>{
    dispatch(fetchProducts(activePage, limit))
  },[activePage, limit])

  const addProduct = async (e) => {
    e.preventDefault();
    if (productName === '' || productType === '' || productBrand === '' || productPrice === 0 ) {
      setEmptyValue(true);
      setTimeout(() => {
        setEmptyValue(false);
      }, 2000);
    }
    else {
      const descriptions = [
        {title:"size",description: "XL"},
        {title:"color",description: "red"},
        {title:"qwe",description: "man"},
      ]

      const formData = new FormData();
      formData.append('name', productName);
      formData.append('price', productPrice);
      formData.append('brandId', brandId);
      formData.append('typeId', typeId);
      formData.append('img', file);
      formData.append('info', JSON.stringify(descriptions));

      const response = await axios.post('http://127.0.0.1:5000/api/device/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
    setProductName('');    
    setProductType('');    
    setProductBrand('');  
    setProductPrice(0);
    setFile({});
  }

  const filteredProducts = useMemo(()=>{
      if(filterName == '') {
        return products
      } else {
        return products.filter(product => product.name.startsWith(filterName))
      }
    },[products,filterName]) 

  return (
    <>
      {
        errorProducts ?
        <Page404 />
        :
        <>
        <div className="product">
        <form className="product__menu">
        <ProductInput className={styleInput.product__input} value={productName} placeholder={"Enter product name"} type={"text"} onChange={(e) => setProductName(e.target.value)} />
        <ProductSelect className={styleSelect.product__select} value={productType} name="type" arr={types} onChange={(e) => {
          setProductType(e.target.value)
          const id = e.target.options[e.target.selectedIndex].value
          setTypeId(id)
        }} />
        <ProductSelect className={styleSelect.product__select} value={productBrand} name="brand" arr={brands} onChange={(e) => {
          setProductBrand(e.target.value)
          const id = e.target.options[e.target.selectedIndex].value
          setBrandId(id)
        }} />
        <ProductInput className={styleInput.product__input} value={productPrice} placeholder={"Enter product price"} type={'number'} onChange={(e) => setProductPrice(e.target.value)} />
        <ProductImg setFile={setFile} />
        <button className="product__btn" onClick={addProduct}>Add product</button>
      </form>
      <div>
        {!emptyValue ?
          <div className="product__info">
            <Products products={filteredProducts} />
            <div className="pagination">
              <BackOrNext activePage={activePage} setActivePage={setActivePage} name="prev" />
              {
                btnsPagination.map(page=>
                  <button className="pagination__btn" key={page} onClick={()=>setActivePage(page)}>{page}</button>
                )
              }
              <BackOrNext activePage={activePage} setActivePage={setActivePage} btns={btnsPagination} name="next" />
            </div>
          </div>
          :
          <div className="product__info-empty">Произошла ошибка!<br/>Такой товар уже есть или вы ввели пустое значение</div>
        }
      </div>
      <div>
        <div className="filter">
          <div className="filter__text">Filter</div>
          <form className="filter__menu">
            <FilterInput name={filterName} setName={setFilterName} />
            <input className="filter__input" type="text" placeholder="price" />
          </form>
        </div>
      </div>
    </div>
        </>
      }
    </>
    // <div className="product">
    //     <form className="product__menu">
    //     <ProductInput className={styleInput.product__input} value={productName} placeholder={"Enter product name"} type={"text"} onChange={(e) => setProductName(e.target.value)} />
    //     <ProductSelect className={styleSelect.product__select} value={productType} name="type" arr={types} onChange={(e) => {
    //       setProductType(e.target.value)
    //       const id = e.target.options[e.target.selectedIndex].value
    //       setTypeId(id)
    //     }} />
    //     <ProductSelect className={styleSelect.product__select} value={productBrand} name="brand" arr={brands} onChange={(e) => {
    //       setProductBrand(e.target.value)
    //       const id = e.target.options[e.target.selectedIndex].value
    //       setBrandId(id)
    //     }} />
    //     <ProductInput className={styleInput.product__input} value={productPrice} placeholder={"Enter product price"} type={'number'} onChange={(e) => setProductPrice(e.target.value)} />
    //     <ProductImg setFile={setFile} />
    //     <button className="product__btn" onClick={addProduct}>Add product</button>
    //   </form>
    //   <div>
    //     {!emptyValue ?
    //       <div className="product__info">
    //         <Products products={filteredProducts} />
    //         <div className="pagination">
    //           <BackOrNext activePage={activePage} setActivePage={setActivePage} name="prev" />
    //           {
    //             btnsPagination.map(page=>
    //               <button className="pagination__btn" key={page} onClick={()=>setActivePage(page)}>{page}</button>
    //             )
    //           }
    //           <BackOrNext activePage={activePage} setActivePage={setActivePage} btns={btnsPagination} name="next" />
    //         </div>
    //       </div>
    //       :
    //       <div className="product__info-empty">Произошла ошибка!<br/>Такой товар уже есть или вы ввели пустое значение</div>
    //     }
    //   </div>
    //   <div>
    //     <div className="filter">
    //       <div className="filter__text">Filter</div>
    //       <form className="filter__menu">
    //         <FilterInput name={filterName} setName={setFilterName} />
    //         <input className="filter__input" type="text" placeholder="price" />
    //       </form>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ProductsPage