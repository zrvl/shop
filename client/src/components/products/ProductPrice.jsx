import React from 'react'

const ProductPrice = (props) => {
  return (
    <input className="product__price" type="number" value={props.price} onChange={(e) => props.setPrice(e.target.value)} placeholder='Enter price' />
  )
}

export default ProductPrice