import React from 'react'
import { useNavigate } from 'react-router-dom'

function EditProduct(props) {
  const navigate = useNavigate();

  return (
    <button className="product__edit" onClick={() => navigate(`${props.productId}`)}>Edit</button>
  )
}

export default EditProduct