import React from 'react'

const ProductImg = (props) => {
  return (
    <input className="product__img" type="file" onChange={(e) => props.setFile(e.target.files[0])} />
  )
}

export default ProductImg