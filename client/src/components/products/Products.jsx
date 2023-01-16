import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions/asyncActions/products';
import EditProduct from '../EditProduct'

const Products = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>IMG</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>RATING</th>
        </tr>
      </thead>
      <tbody>
        {
          props.products.map(product => <tr key={product.id}>
              <td>
                {product.id}
              </td>
              <td>
                <img src={`http://127.0.0.1:5000/${product.img}`} width="40px"/>
              </td>
              <td>
                {product.name}
              </td>
              <td>
                {product.price}
              </td>
              <td>
                {product.rating}
                <EditProduct productId={product.id} />
              </td>
          </tr>)
        }
      </tbody>
    </table>
    
  )
}

export default Products