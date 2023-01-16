import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductInput from '../components/UI/productInput/ProductInput'
import styleInput from '../components/UI/productInput/ProductInput.module.css'
import SaveEditBrand from '../components/brands/SaveEditBrand'

const BrandPage = () => {
  const {id} = useParams();
  const [brand, setBrand] = useState({});
  const [editName, setEditName] = useState('');
  const [emptyBrand, setEmptyBrand] = useState(false);

  const getBrand = async () => {
    const resp = await axios.get(`http://127.0.0.1:5000/api/brand/${id}`)
    setBrand(resp.data)
  }

  useEffect(() => {
    getBrand()
    setEditName('')
  }, [])


  return (
    <>
      {
        emptyBrand ?
          <div>Введите значение</div>
        :
        <>
          <ProductInput className={styleInput.product__input} onChange={(e) => setEditName(e.target.value)} /> 
          <SaveEditBrand newName={editName} oldName={brand.name} empty={setEmptyBrand} />
        </>
      }
    </>
  )
}

export default BrandPage