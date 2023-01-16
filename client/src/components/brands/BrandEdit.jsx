import React from 'react'
import { useNavigate } from 'react-router-dom'

function BrandEdit(props) {
  const navigate = useNavigate()
  
  return (
    <button className="brand__item-edit" onClick={() => navigate(`${props.id}`)}>Edit</button>
  )
}

export default BrandEdit