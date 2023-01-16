import React from 'react'

const ProductName = (props) => {
  return (
    <input 
      className="product__name"
      type="text" 
      value={props.name} 
      placeholder='Enter name'
      onChange={(e) => {
        props.setEmptyName(false)
        props.setName(e.target.value)
        }} 
      />
  )
}

export default ProductName