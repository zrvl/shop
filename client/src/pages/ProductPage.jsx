import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneProduct } from '../store/actions/asyncActions/oneProduct'
import ProductInput from '../components/UI/productInput/ProductInput'
import ProductSelect from '../components/UI/productSelect/ProductSelect'
import styleSelect from '../components/UI/productSelect/ProductSelect.module.css'
import styleInput from '../components/UI/productInput/ProductInput.module.css'
import SaveValue from '../components/SaveValue'

function ProductPage() {
  
  const {id} = useParams()
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productBrand, setProductBrand] = useState('')
  const [productType, setProductType] = useState('')
  const product = useSelector(state => state.oneProductReducer.product)
  const types = useSelector(state => state.typesReducer.types);
  const brands = useSelector(state => state.brandsReducer.brands)

  useEffect(() => {
    dispatch(fetchOneProduct(id))
  }, [])

  return (
    <div className="product__page">
      <ProductInput className={styleInput.product__input} value={productName} placeholder={"Enter product name"} type={"text"} onChange={(e) => setProductName(e.target.value)} />
      <ProductSelect className={styleSelect.product__select} value={productBrand} name="brand" arr={brands} onChange={(e) => {
          setProductBrand(e.target.value)
        }} />
      <ProductSelect className={styleSelect.product__select} value={productType} name="type" arr={types} onChange={(e) => {
        setProductType(e.target.value)
      }} />
      <ProductInput className={styleInput.product__input} placeholder={"Enter product price"} value={productPrice} type={"number"} onChange={(e) => setProductPrice(e.target.value)} />
      <SaveValue name={productName} oldName={product.name} brand={productBrand} oldBrand={product.brandId} type={productType} oldType={product.typeId} price={productPrice} oldPrice={product.price} />
    </div>
  )
}

export default ProductPage