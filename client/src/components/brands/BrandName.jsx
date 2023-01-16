import React from 'react'

const BrandName = (props) => {
  
  return (
    <input className="brand__menu-name" type="text" value={props.name} placeholder="Enter name" onChange={(e) => props.setName(e.target.value)} />
  )
}

export default BrandName